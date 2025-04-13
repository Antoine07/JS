import "./App.css";
import { useReducer, useState, useEffect } from "react";
import { initialeState, reducer } from "./services/calculator";

function App() {
  // useReducer pour gérer l'état global (total et messages)
  const [state, dispatch] = useReducer(reducer, initialeState);

  // États locaux pour les deux champs de saisie
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  // Fonction pour additionner les deux nombres
  const add = (e) => {
    e.preventDefault();
    dispatch({ type: "+", payload: { num1, num2 } });
  };

  // Fonction pour multiplier les deux nombres
  const mult = (e) => {
    e.preventDefault();
    dispatch({ type: "x", payload: { num1, num2 } });
  };

  // useEffect déclenché quand le résultat (state.total) change
  useEffect(() => {
    console.log("Effet déclenché, total =", state.total);

    // Fonction de nettoyage, exécutée avant la mise à jour ou démontage
    return () => {
      console.log("Cleanup exécuté, ancien total =", state.total);

      // ❌ On ne vide plus les inputs ici pour une meilleure UX
      // Si besoin, on peut faire ça uniquement dans le bouton Reset
    };
  }, [state.total]);

  // Gère les changements dans les inputs
  const handleChange = (e) => {
    const { value, name } = e.target;

    // Si la valeur n'est pas vide et n'est pas un nombre, on affiche une erreur
    if (value.trim() !== '' && isNaN(parseFloat(value))) {
      dispatch({
        type: "MESSAGE",
        payload: {
          message: `La valeur ${value} n'est pas un nombre`,
          type: "error",
          input: name,
        },
      });
      return;
    }

    // Si la valeur est valide, on efface le message d'erreur
    dispatch({ type: "MESSAGE", payload: { message: null } });

    // Mise à jour des valeurs locales selon le champ
    if (name === "num1") setNum1(value);
    if (name === "num2") setNum2(value);
  };

  return (
    <>
      {/* Champ de saisie pour le premier nombre */}
      <p>
        Number 1:{" "}
        <input name="num1" value={num1} onChange={handleChange} />
      </p>

      {/* Champ de saisie pour le second nombre */}
      <p>
        Number 2 :{" "}
        <input name="num2" value={num2} onChange={handleChange} />
      </p>

      {/* Affichage du message d'erreur s'il existe */}
      {state?.message && <p style={{ color: "red" }}>{state.message}</p>}

      {/* Formulaire pour addition */}
      <form onSubmit={add}>
        <input type="hidden" name="+" value="+" />
        <p>
          <button>+</button>
        </p>
      </form>

      {/* Formulaire pour multiplication */}
      <form onSubmit={mult}>
        <input type="hidden" name="x" value="x" />
        <p>
          <button>x</button>
        </p>
      </form>

      {/* Bouton pour réinitialiser la calculatrice */}
      <p>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
            setNum1('');
            setNum2('');
          }}
        >
          Reset
        </button>
      </p>

      {/* Affichage du résultat */}
      <p>Résultat : {state?.total}</p>
    </>
  );
}

export default App;
