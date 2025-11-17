import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchEducation, createEducation, deleteEducation } from '../services/api';

const Education = () => {
  const { user, isAdmin } = useAuth();
  const [educations, setEducations] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch existing educations on component mount
  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      const response = await fetchEducation();
      // ✅ Make sure we're storing the actual education objects, not responses
      setEducations(response.data);
      console.log('📚 Loaded educations:', response.data);
    } catch (error) {
      console.error('Error fetching educations:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate required fields
      if (!formData.title || !formData.firstname || !formData.lastname || !formData.completion) {
        setError('Title, first name, last name, and completion date are required');
        setLoading(false);
        return;
      }

      // Format completion date
      const completionDate = new Date(formData.completion);
      const formattedCompletion = completionDate.toISOString();

      // Prepare submission data
      const submissionData = {
        title: formData.title,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email || user?.email || 'test@example.com',
        completion: formattedCompletion,
        description: formData.description || ''
      };

      console.log('📤 Submitting:', submissionData);

      const response = await createEducation(submissionData);
      
      console.log('✅ API Response:', response.data);
      
      // ✅ FIXED: Handle different response structures
      let newEducation;
      
      if (response.data.edu && response.data.edu._id) {
        // Response has {message: "...", edu: {...}}
        newEducation = response.data.edu;
      } else if (response.data._id) {
        // Response is the education object directly
        newEducation = response.data;
      } else {
        // Unknown structure, refresh the list
        console.log('🔄 Unknown response structure, refreshing list...');
        fetchEducations();
        setFormData({ title: '', firstname: '', lastname: '', email: '', completion: '', description: '' });
        setSuccess('Education added successfully!');
        setLoading(false);
        return;
      }
      
      // ✅ Add the actual education object to state
      setEducations(prev => [...prev, newEducation]);
      
      // Reset form
      setFormData({ 
        title: '', 
        firstname: '', 
        lastname: '', 
        email: '', 
        completion: '', 
        description: '' 
      });
      
      setSuccess('Education added successfully!');
      
    } catch (error) {
      console.error('❌ Error:', error.response?.data);
      setError(error.response?.data?.message || 'Failed to save education');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const handleDelete = async (education) => {
    console.log('🗑️ Delete clicked for:', education);
    
    // ✅ FIXED: Check if this is a valid education object or a response object
    let educationToDelete = education;
    
    // If it's a response object with {message, edu}, use the edu property
    if (education.edu && education.edu._id) {
      educationToDelete = education.edu;
      console.log('🔧 Extracted education from response:', educationToDelete);
    }
    
    // If it's still not a valid education object, check if it's the actual education
    if (!educationToDelete._id) {
      console.error('❌ Cannot delete: Invalid education object structure:', education);
      setError('Cannot delete: Invalid education record structure');
      return;
    }

    if (!window.confirm(`Are you sure you want to delete "${educationToDelete.title}"?`)) {
      return;
    }

    try {
      console.log('🗑️ Deleting education with ID:', educationToDelete._id);
      await deleteEducation(educationToDelete._id);
      
      // ✅ Remove from state using the actual _id
      setEducations(prev => prev.filter(edu => {
        // Handle both response objects and education objects
        const eduId = edu._id || (edu.edu && edu.edu._id);
        return eduId !== educationToDelete._id;
      }));
      
      setSuccess(`"${educationToDelete.title}" deleted successfully!`);
    } catch (error) {
      console.error('❌ Delete error:', error.response?.data);
      setError(`Failed to delete "${educationToDelete.title}": ${error.response?.data?.message || 'Unknown error'}`);
    }
  };

  // Helper to get display data from education (handles both response objects and education objects)
  const getEducationDisplayData = (edu) => {
    if (edu.edu && edu.edu._id) {
      // It's a response object: {message: "...", edu: {...}}
      return edu.edu;
    }
    // It's a direct education object
    return edu;
  };

  return (
    <div className="education-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Education & Qualifications</h2>
      
      {/* Debug button */}
      {isAdmin && process.env.NODE_ENV === 'development' && (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button
            onClick={() => console.log('Current educations structure:', educations)}
            style={{
              background: '#17a2b8',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Debug: Log Educations Structure
          </button>
        </div>
      )}
      
      {/* Success Message */}
      {success && (
        <div style={{ 
          background: '#d4edda', 
          color: '#155724', 
          padding: '10px', 
          borderRadius: '5px', 
          marginBottom: '20px',
          border: '1px solid #c3e6cb'
        }}>
          {success}
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div style={{ 
          background: '#f8d7da', 
          color: '#721c24', 
          padding: '10px', 
          borderRadius: '5px', 
          marginBottom: '20px',
          border: '1px solid #f5c6cb'
        }}>
          {error}
        </div>
      )}

      {/* Education List */}
      <div className="education-list">
        <h3 style={{ marginBottom: '20px', color: '#555' }}>Education Records ({educations.length})</h3>
        {educations.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            No education records found.
          </p>
        ) : (
          educations.map((edu) => {
            // ✅ Get the actual education data for display
            const educationData = getEducationDisplayData(edu);
            const displayKey = educationData._id || `edu-${Math.random()}`;
            
            return (
              <div 
                key={displayKey}
                className="education-item" 
                style={{
                  border: '1px solid #e0e0e0',
                  padding: '20px',
                  margin: '15px 0',
                  borderRadius: '8px',
                  background: '#f9f9f9',
                  position: 'relative'
                }}
              >
                <h4 style={{ margin: '0 0 10px 0', color: '#2c5530' }}>{educationData.title}</h4>
                <p style={{ margin: '5px 0' }}><strong>Student:</strong> {educationData.firstname} {educationData.lastname}</p>
                <p style={{ margin: '5px 0' }}><strong>Email:</strong> {educationData.email}</p>
                <p style={{ margin: '5px 0' }}><strong>Completion Date:</strong> {formatDate(educationData.completion)}</p>
                {educationData.description && (
                  <p style={{ margin: '10px 0 0 0' }}><strong>Description:</strong> {educationData.description}</p>
                )}
                
                {/* Delete button for admin */}
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(edu)} // Pass the original item for deletion
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Admin Form */}
      {isAdmin && (
        <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Add New Education Record</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: '15px' }}>
              {/* Title */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Program Title *
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., Software Engineering"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Student Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="e.g., Henry"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '16px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="e.g., Deck"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g., henrydeck@port.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Completion Date */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Completion Date *
                </label>
                <input
                  type="date"
                  name="completion"
                  value={formData.completion}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>

              {/* Description */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="e.g., software engineer"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{
                  background: loading ? '#6c757d' : '#007bff',
                  color: 'white',
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  width: '100%'
                }}
              >
                {loading ? 'Adding Education...' : 'Add Education Record'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Education;