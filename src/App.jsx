import { useState } from "react";
import LoadingSree from "./components/LoadingSree";
import "./index.css";

function App() {
  const [isLoaded, setIsLoading] = useState(false);
  return (
    <>{!isLoaded && <LoadingSree onComplete={() => setIsLoaded(true)} />}</>
  );
}

export default App;
