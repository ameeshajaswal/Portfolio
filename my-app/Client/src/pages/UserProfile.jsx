import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
                <p className="text-blue-100">{user?.email}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                  {user?.role === 'admin' ? 'Administrator' : 'Member'}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-gray-800">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-gray-800">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Account Type</label>
                    <p className="text-gray-800 capitalize">{user?.role}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">Projects Viewed</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-600">Profile Completion</span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Features */}
            {user?.role === 'admin' && (
              <div className="mt-6 bg-yellow-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4 text-yellow-800">Admin Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-700">Manage Projects</h3>
                    <p className="text-sm text-yellow-600 mt-1">Add, edit, or remove portfolio projects</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-700">View Messages</h3>
                    <p className="text-sm text-yellow-600 mt-1">See all contact form submissions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-700">Manage Education</h3>
                    <p className="text-sm text-yellow-600 mt-1">Update qualifications</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}