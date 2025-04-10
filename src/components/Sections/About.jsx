import React from "react";

const About = () => {
  const Skills = [
    "Javascript (Es5+)",
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "MySql",
    "PHP",
  ];

  return (
    <section
      id="about "
      className="min-h-screen border border-green-500 flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4 border border-red-500">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Creative thinker with a passion for turning ideas into impactful
            digital experiences. Skilled in design, development, and
            problem-solving with a user-first mindset. Always learning, always
            building — let’s make something great together.
          </p>

          <div className="grid grid-cols-1 md-grid-cols-2 gap-6 ">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 ">Skills</h3>
              <div className="flex flex-wrap gap-2 ">
                {Skills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple/20 hover:shadow-[0_2px_8px_rgba[59,130,2246,0.2]] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
