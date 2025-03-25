# Les Hooks Avancés en React

En complément des Hooks fondamentaux comme **useState** et **useEffect**, React propose d'autres Hooks qui répondent à des besoins spécifiques. Explorons ces Hooks pour mieux comprendre leurs usages et leurs avantages.

---

## 1. **useContext**

Le Hook **useContext** permet de consommer facilement un contexte créé avec l'API Context de React. Cela évite de passer manuellement des props à travers plusieurs niveaux de composants.

### Exemple :
```jsx
const ThemeContext = React.createContext('light');

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = React.useContext(ThemeContext); // Consommer le contexte
  return <button className={`button-${theme}`}>Theme is {theme}</button>;
};
```

### Utilisations courantes :
- Gestion des thèmes.
- Partage de données globales (par exemple : utilisateur connecté, langue).

---

## 2. **useMemo**

Le Hook **useMemo** optimise les performances en mémorisant le résultat d'une fonction coûteuse. React recalculera cette valeur uniquement si les dépendances spécifiées changent.

### Exemple :
```jsx
const App = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const expensiveCalculation = React.useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Double Count: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};
```

### Utilisations courantes :
- Calculs complexes ou coûteux.
- Optimisation des performances dans des listes importantes.

---

## 3. **useCallback**

Le Hook **useCallback** mémorise une fonction afin qu'elle ne soit pas recréée à chaque rendu. Cela est utile pour éviter des rendus inutiles dans des composants enfants.

### Exemple :
```jsx
const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Counter increment={increment} />
      <p>Count: {count}</p>
    </div>
  );
};

const Counter = React.memo(({ increment }) => {
  console.log("Rendering Counter");
  return <button onClick={increment}>Increment</button>;
});
```

### Utilisations courantes :
- Éviter des recréations de fonctions dans des composants avec **React.memo**.
- Optimisation des performances dans des listes ou graphiques.

---

## 4. **useRef**

Le Hook **useRef** crée une référence mutable qui persiste entre les rendus. Contrairement à un state, modifier une référence avec **useRef** ne provoque pas de nouveau rendu.

### Exemple :
### a) Référencer un élément DOM :
```jsx
const App = () => {
  const inputRef = React.useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Accéder à l'élément DOM
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};
```

### b) Stocker une valeur persistante :
```jsx
const Timer = () => {
  const [count, setCount] = React.useState(0);
  const timerRef = React.useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <p>Timer: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
```

### Utilisations courantes :
- Manipuler des éléments DOM directement.
- Stocker des informations qui ne nécessitent pas de nouveau rendu (par exemple : identifiant de timer).

---

## Comparaison : **useMemo** vs **useCallback**

| Hook         | Utilisation principale                          |
|--------------|------------------------------------------------|
| **useMemo**  | Mémorise une valeur issue d'un calcul coûteux. |
| **useCallback** | Mémorise une fonction pour éviter qu'elle ne change entre les rendus. |

---