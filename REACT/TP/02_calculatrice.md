# TP  Calculatrice

1. Installez un projet avec vite.js
2. Créez une calculatrice simple avec deux champs numériques et des boutons pour additionner, multiplier et réinitialiser.


Utilisez le code suivant pour récupérer les données du champ `input` et un `useReducer`

```js
 const [num1, setNum1] = React.useState('');

 // dans la partie render
// num1 <=> contrôle la saise 
// setNum1(e.target.value) récupère la saisie pour la contrôler
<input
    type="num1"
    value={num1}
    onChange={(e) => setNum1(e.target.value)}
/>

```


##  `useReducer` gestion complexe de state

```jsx
// création d'un state complexe
const initialState = { count: 0,  step : 2 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...initialState, count: state.count + state.step };
    case 'decrement':
      return { ...initialState, count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const Counter = () => {
  // state états de vos variables d'états
  // dispatch fonction qui modifie l'état de vos variables dans le state
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};
```
