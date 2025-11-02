
import React from "react";
import coffeeCafeImg from "../assets/coffee-cafe.png";
import portfolioImg from "../assets/portfolio.png";
import churnImg from "../assets/churn-prediction.png";

const projectsData = [
  {
    id: 1,
    title: "Coffee Cafe Website",
    image: coffeeCafeImg,
    description: "A full-stack website for a coffee cafe using React and Node.js.",
    role: "Frontend & Backend Developer",
    link: "https://github.com/ameeshajaswal/git-trail2.git"
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: portfolioImg,
    description: "A personal portfolio site showcasing projects and skills.",
    role: "Full-stack Developer",
    link: "https://github.com/ameeshajaswal/Portfolio.git"
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    image: churnImg,
    description: "Predicting customer churn using Linear Regression and Random Forest. Evaluated with MSE, MAE, and R² metrics.",
    role: "Data Scientist / Python Developer",
    link: "https://github.com/ameeshajaswal/Customer-Churn-Prediction-Project.git"
  }
];

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <div
            key={project.id}
            className="bg-pink-50/50 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-gray-500 italic mb-2">{project.role}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
