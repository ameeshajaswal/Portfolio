// Services.jsx
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
    },
    {
      title: "Mobile App Development",
      description: "Creating intuitive and user-friendly mobile apps for iOS and Android using React Native, ensuring seamless performance across devices.",
      image: MA,
    },
    {
      title: "Software Programming",
      description: "Writing clean, efficient, and maintainable code for custom software solutions, from algorithms to automation scripts.",
      image: SD,
    },
    {
      title: "Database Design & Integration",
      description: "Designing relational and non-relational databases, optimizing queries, and integrating with applications to ensure smooth data flow.",
      image: DM,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-5xl font-bold text-purple-600 text-center mb-12">Services I Offer</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition transform"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 mb-6"
            />
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">{service.title}</h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
