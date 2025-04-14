import { useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./services/numbers";
import { getRandomNumber } from "./utils/randonNumber";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRandomNumber = () => {
    dispatch({ type: "ADD_NUMBER", payload: { number: getRandomNumber() } });
  }

  const handleShuffle = () => {
    dispatch({ type : 'SHUFFLE'})
  }

  return (
    <>
      <h1>Numbers alea</h1>
      <button onClick={handleRandomNumber}>Add</button>
      <button onClick={handleShuffle}>Shuffle</button>
      {state.numbers.length > 0 && (
        <ul>
          {state.numbers.map((number, i) => (
            <li key={i}>{number}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
