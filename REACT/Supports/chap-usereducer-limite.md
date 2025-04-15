# Ce qu'il faut comprendre pour la gestion du state global

Pour que les données de notre `useReducer` dans `App.jsx` soient accessibles dans un autre composant comme `About.jsx`, on doit **partager cet état via un contexte** (`React.createContext`) ou utiliser un autre système de gestion d’état global comme Zustand, par exemple.

Actuellement, les données modifiées dans `App.jsx` via le `state` (défini dans le fichier `numbers.js`) ne sont **pas accessibles** dans le composant `About.jsx`. Pour y remédier, il faut **créer un contexte React** permettant de partager l’état global entre les composants.

---

### 1. **Créer un fichier de contexte** (par exemple `AppContext.js`)

```js
// AppContext.js
import { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducer'; // Ton reducer et ton état initial

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
```

---

### 2. **Entourer l'application avec le provider dans `App.jsx` (ou `main.jsx`)**

```js
// App.jsx
import { AppProvider } from './AppContext';
import About from './About';

function App() {
  return (
    <AppProvider>
      {/* Tous les composants qui doivent accéder au contexte */}
      <About />
    </AppProvider>
  );
}

export default App;
```

---

### 3. **Consommer le contexte dans `About.jsx`**

```js
// About.jsx
import { useContext } from 'react';
import { AppContext } from './AppContext';

function About() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <h1>About</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default About;
```

---
