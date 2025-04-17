import { useState } from "react";
import LoadingSree from "./components/LoadingSree";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

function App() {
  const [isLoaded, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingSree onComplete={() => setIsLoading(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 border border-red-400`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />

        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
