import { useState } from "react";
import LoadingSree from "./components/LoadingSree";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoading] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingSree onComplete={() => setIsLoading(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
