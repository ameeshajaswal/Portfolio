import React, { createContext, useState, useContext, useEffect } from 'react';
import { signIn, signUp, signOut } from '../services/api';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin check function
  const checkIsAdmin = (userObj = user) => {
    if (!userObj) return false;
    
    // FOR DEVELOPMENT: Make EVERY user an admin for testing
    if (process.env.NODE_ENV === 'development') {
      return true;
    }
    
    // Production logic
    const userRole = userObj.role?.toLowerCase();
    return (
      userRole === 'admin' ||
      userRole === 'administrator' ||
      userObj.isAdmin === true ||
      userObj.admin === true ||
      userObj.userType === 'admin'
    );
  };

  // Temporary admin override for development
  const tempAdminOverride = (userData) => {
    if (!userData) return userData;
    
    // FOR DEVELOPMENT: Make EVERY user an admin
    if (process.env.NODE_ENV === 'development') {
      return {
        ...userData,
        role: 'admin',
        isAdmin: true
      };
    }
    
    return userData;
  };

  // Update admin status whenever user changes
  useEffect(() => {
    const adminStatus = checkIsAdmin();
    setIsAdmin(adminStatus);
  }, [user]);

  // Check if user is logged in on app start
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    
    if (userInfo) {
      try {
        let userData = JSON.parse(userInfo);
        // Apply temporary admin override to existing stored user
        userData = tempAdminOverride(userData);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user info:', error);
        localStorage.removeItem('userInfo');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await signIn(email, password);
      let userData = response.data.data;
      
      // Apply temporary admin override
      userData = tempAdminOverride(userData);
      
      setUser(userData);
      localStorage.setItem('userInfo', JSON.stringify(userData));
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      const response = await signUp(name, email, password);
      let userData = response.data.data;
      
      // Apply temporary admin override
      userData = tempAdminOverride(userData);
      
      setUser(userData);
      localStorage.setItem('userInfo', JSON.stringify(userData));
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAdmin(false);
      localStorage.removeItem('userInfo');
    }
  };

  // Context value
  const value = {
    user,
    login,
    register,
    logout,
    isAdmin: isAdmin,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};