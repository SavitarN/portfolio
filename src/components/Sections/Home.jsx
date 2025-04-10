import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Hi, I'm Nischal Joshi
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Passionate Web Developer specializing in JavaScript and React.js, with
          a knack for crafting responsive, user-friendly web applications. Over
          the past year, I have gained hands-on experience building dynamic
          interfaces, integrating APIs, and solving real-world problems through
          technology.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600  text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600  text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
