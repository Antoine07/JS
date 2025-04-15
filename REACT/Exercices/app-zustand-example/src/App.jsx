import { useState } from "react";
import "./App.css";
import useStoreLetter from "./store/useStoreLetter";
import About from "./About";

function App() {
  const [letter, setLetter] = useState("");
  const addLetter = useStoreLetter((state) => state.addLetter);
  const letters = useStoreLetter((state) => state.letters);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ letter });
    setLetter("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={letter}
          onChange={(e) => setLetter(e.target.value.toUpperCase())}
        />
        <button>Add</button>
      </form>
      <About />
    </>
  );
}

export default App;
