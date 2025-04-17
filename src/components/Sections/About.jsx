import React from "react";
import { RevealOnScroll } from "./ReviewOnScroll";
const About = () => {
  const Skills = [
    "Javascript (Es5+)",
    "React",
    "TailwindCSS",
    "Problem-solving",
    "HTML",
    "CSS",
    "MySql",
    "PHP",
    "Design",
  ];

  return (
    <section
      id="about "
      className="min-h-screenflex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
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

            <div className="grid grid-cols-1  gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1  ">
                <h3 className="text-xl font-bold mb-4 ">Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center ">
                  {Skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-8 ">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📖 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor's In Information Management</strong>{" "}
                  Tribhuvan University (2019-2025)
                </li>
                <li>
                  Relavant Coursework: Programming, Web Development, DSA,
                  Software Engineering, Management
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-1 text-gray-300">
                <div>
                  <h3>React Js Intern at Treeleaf Technologies -4 months</h3>
                  <p>
                    During my internship at TreeLeaf Technologies, I worked on
                    the frontend development of two major projects — an
                    AI-powered chatbot and a document management system
                    (DOCMINT).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
