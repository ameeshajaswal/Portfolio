import axios from 'axios';

const API = axios.create({ 
  baseURL: 'http://localhost:3000/api',
});

// Add auth token to requests
API.interceptors.request.use((req) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    const { token } = JSON.parse(userInfo);
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth API
export const signIn = (email, password) => API.post('/auth/signin', { email, password });
export const signUp = (name, email, password) => API.post('/auth/signup', { name, email, password });
export const signOut = () => API.get('/auth/signout');
export const getCurrentUser = () => API.get('/auth/me');

// Education API
export const fetchEducation = () => API.get('/qualifications');
export const createEducation = (educationData) => API.post('/qualifications', educationData);
export const updateEducation = (id, educationData) => API.put(`/qualifications/${id}`, educationData);
export const deleteEducation = (id) => API.delete(`/qualifications/${id}`);

// Projects API
export const fetchProjects = () => API.get('/projects');
export const createProject = (projectData) => API.post('/projects', projectData);
export const updateProject = (id, projectData) => API.put(`/projects/${id}`, projectData);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

// Contacts API
export const createContact = (contactData) => API.post('/contacts', contactData);
export const fetchContacts = () => API.get('/contacts');

export default API;