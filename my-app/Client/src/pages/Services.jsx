import React from "react";
import SD from "../assets/SP.svg";
import WD from "../assets/WD.svg";
import MA from "../assets/MA.svg";
import DM from "../assets/DM.png";

function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "I design and build responsive websites and web applications using React, Node.js, and modern web technologies. Focused on performance, accessibility, and user experience.",
      image: WD,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
    },
    {
      title: "Mobile App Development",
      description: "Creating intuitive and user-friendly mobile apps for iOS and Android using React Native, ensuring seamless performance across devices.",
      image: MA,
      technologies: ["React Native", "iOS", "Android", "Firebase"]
    },
    {
      title: "Software Programming",
      description: "Writing clean, efficient, and maintainable code for custom software solutions, from algorithms to automation scripts.",
      image: SD,
      technologies: ["Python", "JavaScript", "Java", "C++", "Algorithms"]
    },
    {
      title: "Database Design & Integration",
      description: "Designing relational and non-relational databases, optimizing queries, and integrating with applications to ensure smooth data flow.",
      image: DM,
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-600 mb-4">Services I Offer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional software development services tailored to your needs. 
          From concept to deployment, I deliver high-quality solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Service Icon */}
            <div className="flex justify-center mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            
            {/* Service Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {service.title}
            </h2>
            
            {/* Service Description */}
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              {service.description}
            </p>
            
            {/* Technologies */}
            <div className="mt-auto">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Let's work together to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;