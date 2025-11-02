// Contact.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // For now, just log the data
    navigate("/"); // Redirect back to Home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 flex flex-col items-center space-y-12">
      {/* Contact Info Panel */}
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Contact Me</h1>
        <p className="text-gray-700 text-lg mb-2">📍 Location: Toronto, Canada</p>
        <p className="text-gray-700 text-lg mb-2">📧 Email: ameesha@example.com</p>
        <p className="text-gray-700 text-lg mb-2">📞 Phone: +1 123-456-7890</p>
        <p className="text-gray-700 text-lg">💼 LinkedIn: linkedin.com/in/ameesha</p>
      </div>

      {/* Contact Form */}
      <div className="bg-white/90 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-pink-500 mb-6 text-center">
          Send Me a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
          </div>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
