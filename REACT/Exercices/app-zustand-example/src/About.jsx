import "./App.css";
import useStoreLetter from "./store/useStoreLetter";

function About() {
  const letters = useStoreLetter((state) => state.letters);
  return (
    <>
    <p>{letters[letters.length - 1]?.letter ?? 'no letter'}</p>
    </>
  );
}

export default About;
