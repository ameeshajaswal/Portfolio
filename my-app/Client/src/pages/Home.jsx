import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Static project data for public view
  const staticProjects = [
    {
      id: 1,
      title: "Coffee Cafe Website",
      description: "Full-stack website built with React and Node.js featuring menu, ordering system, and admin panel.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with responsive design and modern UI.",
      technologies: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Customer Churn Prediction",
      description: "Machine learning project predicting customer churn using Python and scikit-learn.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"]
    }
  ];

  return (
    <div className="p-8 text-center md:text-left">
      {/* Welcome Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to My Portfolio
      </h1>

      {/* Mission / Intro */}
      <p className="mt-4 text-lg md:text-xl text-gray-700 mb-6">
        Hi, I'm Ameesha! I'm a full-stack developer passionate about creating 
        beautiful and functional web applications. Explore my work and get to know me better!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-4 mb-8">
        <Link
          to="/about"
          className="px-6 py-3 bg-pink-300 hover:bg-pink-500 text-white font-semibold rounded-md transition-colors duration-300"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 bg-teal-300 hover:bg-teal-500 text-white font-semibold rounded-md transition-colors duration-300"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-300 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Contact Me
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-purple-300 hover:bg-purple-500 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Join My Network
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">10+</div>
          <div className="text-sm text-gray-600">Projects</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">3+</div>
          <div className="text-sm text-gray-600">Years Experience</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">5+</div>
          <div className="text-sm text-gray-600">Technologies</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">100%</div>
          <div className="text-sm text-gray-600">Client Satisfaction</div>
        </div>
      </div>

      {/* Featured Skills / Services */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">Building responsive and interactive websites using React, Node.js, and modern web technologies.</p>
        </div>
        <div className="bg-teal-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
          <p className="text-gray-600">Analyzing datasets and creating predictive models using Python and machine learning techniques.</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Designing user-friendly interfaces with a focus on aesthetics, accessibility, and user experience.</p>
        </div>
      </div>

      {/* Recent Projects Preview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Projects</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Here are some of my recent projects. Sign up to see more detailed case studies and live demos!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="font-semibold mb-2 text-lg text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              {project.technologies && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Why Sign Up Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why Join My Portfolio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Access Exclusive Content</h3>
              <p className="text-gray-600 text-sm">Get detailed case studies, code samples, and project insights.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Direct Communication</h3>
              <p className="text-gray-600 text-sm">Contact me directly through the platform for collaborations.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Personalized Experience</h3>
              <p className="text-gray-600 text-sm">Save your favorite projects and get tailored recommendations.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Stay Updated</h3>
              <p className="text-gray-600 text-sm">Be the first to know about new projects and updates.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/signup"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-md transition-colors duration-300"
          >
            Sign Up Now - It's Free!
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-gray-600 italic mb-4">
              "Ameesha delivered an outstanding web application that exceeded our expectations. Her attention to detail and technical expertise are remarkable."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-gray-800">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-gray-600 italic mb-4">
              "Working with Ameesha was a pleasure. She transformed our complex requirements into a beautiful, user-friendly interface."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-gray-800">Michael Chen</p>
                <p className="text-sm text-gray-500">Startup Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}