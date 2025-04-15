import { useReducer, useState } from "react";
import { initialState, reducer } from "./services/letter";

import "./App.css";
import Letter from "./components/Letter";

function App() {
  const [letter, setLetter] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    // trim supprime les espaces avant et après la chaine de caractères
    if (letter.trim() != "") {
      setLetter("");
      dispatch({ type: "ADD_LETTER", payload: { letter: letter } });
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const re = /[A-Za-z]/i;
    if (re.test(value.trim()) || value.trim() == "") {
      setLetter(value.toUpperCase());
    }
  };

  const handleShuffle = e => {
    dispatch({type : 'SHUFFLE'});
  }

  return (
    <>
    {state.message && (<p className="danger">{state.message}</p>)}
    <button disabled={!state.letters.length} onClick={handleShuffle} >Shuffle</button>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            onChange={handleChange}
            maxLength="1"
            type="text"
            name="letter"
            value={letter}
          />
        </p>
        <button disabled={!letter.length}>Add</button>
      </form>
      {state.letters.length > 0 &&
        state.letters.map((letter, i) => <Letter key={i} letter={letter} />)}
    </>
  );
}

export default App;
