// About.jsx
import yourPhoto from "../assets/your-photo.jpg";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 pt-12 space-y-12">
      {/* About Card */}
      <div className="bg-white/90 rounded-2xl shadow-lg p-12 max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold text-purple-600 mb-8">About Me</h1>
        
        <img
          src={yourPhoto}
          alt="Ameesha"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-200 mx-auto mb-8"
        />
        
        <h2 className="text-3xl font-semibold text-pink-500 mb-6">
          Ameesha
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hello, my name is <span className="font-semibold">Ameesha</span>. 
          I am currently pursuing my 
          <em className="text-purple-500"> Software Engineering Technology – Artificial Intelligence (AI)</em> 
          Advanced Diploma at Centennial College. I hold a Bachelor of Technology in 
          Computer Science Engineering and have over two years of professional experience 
          in customer service, sales, and client onboarding.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Alongside my technical background, I am developing strong skills in 
          full-stack development, database integration, and software testing. 
          I am passionate about building innovative, user-friendly software 
          solutions and continuously expanding my knowledge in emerging technologies. 
          My goal is to contribute to projects that create meaningful impact while 
          growing as a professional in the tech industry.
        </p>

        {/* 📄 Resume Link */}
        <a
          href="/showportfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
        >
          📄 View My Resume
        </a>
      </div>
    </div>
  );
}

export default About;
