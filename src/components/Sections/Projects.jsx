import React from "react";
import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "./ReviewOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all">
              <h3 className="text-xl font-bold mb-2 ">
                BookStore Ecommerce Website
              </h3>
              <p className="text-gray-400 mb-3">
                A fully responsive online bookstore built with React. Features
                include user registration and login with localStorage-based
                authentication, category-based book filtering using the Open
                Library API, search functionality, and add-to-cart
                functionality. Implemented protected routing for secure
                navigation and modular components for maintainability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  React Js
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  Tailwind CSS
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  Shadcn
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <a
                  href="https://github.com/SavitarN/BookStore.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project Code{" "}
                </a>
                <FaGithub
                  size={20}
                  className="text-white hover:text-gray-400"
                />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all">
              <h3 className="text-xl font-bold mb-2 ">CRUD Application</h3>
              <p className="text-gray-400 mb-3">
                Web app that allows user to perform CRUD operation using local
                storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  React.js
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  HTML
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  CSS
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <a
                  href="https://github.com/SavitarN/CRUD-application-.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project Code{" "}
                </a>
                <FaGithub
                  size={20}
                  className="text-white hover:text-gray-400"
                />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all ">
              <h3 className="text-xl font-bold mb-2 ">
                Banking Transaction Demo
              </h3>
              <p className="text-gray-400 mb-3">
                Banking transaction Demo app where user can login and simulate
                money transfer or borrow from another account. Includes sorting
                of transactio according to date.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  Javascript
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  HTML
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  CSS
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <a
                  href="https://github.com/SavitarN/Banking-transaction-Demo-Js"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project Code{" "}
                </a>
                <FaGithub
                  size={20}
                  className="text-white hover:text-gray-400"
                />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all ">
              <h3 className="text-xl font-bold mb-2 ">
                Lab Equipment Management System -full stack
              </h3>
              <p className="text-gray-400 mb-3">
                A full stack ecommerce website that facilitates user login, user
                authentication , product ordering, esewa payment .
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  PHP
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  HTML
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  CSS
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <a
                  href="https://github.com/SavitarN/Lab-equipment-management-system--Full-Stack.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project Code{" "}
                </a>
                <FaGithub
                  size={20}
                  className="text-white hover:text-gray-400"
                />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all ">
              <h3 className="text-xl font-bold mb-2 ">
                Assembly word guessing game
              </h3>
              <p className="text-gray-400 mb-3">
                A game where user have limited chance to guess random word. Each
                incorrect guess eliminates one programming language at a time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  React Js
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  HTML
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  CSS
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <a
                  href="https://github.com/SavitarN/Lab-equipment-management-system--Full-Stack.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project Code{" "}
                </a>
                <FaGithub
                  size={20}
                  className="text-white hover:text-gray-400"
                />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition-all ">
              <h3 className="text-xl font-bold mb-2 ">
                Nike shoes Landing page
              </h3>
              <p className="text-gray-400 mb-3">
                Full responsive Nike shoes landing page with interactive
                features and pleasing design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  Javascript
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  Tailwind CSS
                </span>
                <span className="bg-purple-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600 hover:shadow-[0_2px_8px_rgba[59,130,246,0.1]] transition all">
                  HTML
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <a
                  href="https://github.com/SavitarN/ProjectNike.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project Code{" "}
                </a>
                <FaGithub
                  size={20}
                  className="text-white hover:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
