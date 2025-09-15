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
      <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-4">
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
    </div>
  );
}
