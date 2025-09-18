import React from "react";

export default function Home() {
  return (
    <div className="p-8 text-center md:text-left">
      {/* Welcome Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to My Portfolio
      </h1>

      {/* Mission / Intro */}
      <p className="mt-4 text-lg md:text-xl text-gray-700 mb-6">
        Explore my projects, discover my services, and learn more about me!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-4 mb-8">
        <a
          href="/about"
          className="px-6 py-3 bg-pink-300 hover:bg-pink-500 text-white font-semibold rounded-md transition-colors duration-300"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="px-6 py-3 bg-teal-300 hover:bg-teal-500 text-white font-semibold rounded-md transition-colors duration-300"
        >
          View Projects
        </a>
      </div>

      {/* Featured Skills / Services */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">Building responsive and interactive websites using React, Node.js, and Tailwind CSS.</p>
        </div>
        <div className="bg-teal-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
          <p className="text-gray-600">Analyzing datasets and creating predictive models using Python and machine learning techniques.</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Designing user-friendly interfaces with a focus on aesthetics and accessibility.</p>
        </div>
      </div>

      {/* Recent Projects Preview */}
      {/* Recent Projects Preview */}
<div>
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-blue-50 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-semibold mb-2">Coffee Cafe Website</h3>
      <p className="text-gray-600 text-sm">Full-stack website built with React and Node.js.</p>
    </div>
    <div className="bg-blue-50 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-semibold mb-2">Portfolio Website</h3>
      <p className="text-gray-600 text-sm">Personal portfolio to showcase skills and projects.</p>
    </div>
    <div className="bg-blue-50 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-semibold mb-2">Customer Churn Prediction</h3>
      <p className="text-gray-600 text-sm">Python project for predicting customer churn using ML models.</p>
    </div>
  </div>
</div>

    </div>
  );
}
