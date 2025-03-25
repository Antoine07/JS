Je comprends, vous travaillez avec des composants fonctionnels qui sont la norme avec les versions récentes de React. Voici un cours mis à jour en tenant compte de l'utilisation des **composants fonctionnels** et des **hooks** en React 19.

---

### **Les événements en React avec des composants fonctionnels**

Les événements en React permettent de capturer et de gérer les interactions de l'utilisateur, telles que les clics, les entrées clavier, ou les actions de survol. React 19 utilise principalement des **composants fonctionnels** et des **hooks** pour gérer l'état et les événements, sans avoir recours aux anciennes classes.

#### **1. Introduction aux événements en React**

Les événements en React fonctionnent de manière similaire aux événements DOM natifs, mais ils sont enveloppés dans un objet **SyntheticEvent**, qui normalise les événements sur tous les navigateurs.

Exemple simple d'un événement `onClick` dans un composant fonctionnel :

```jsx

function MyButton() {
  const handleClick = () => {
    alert("Le bouton a été cliqué !");
  };

  return <button onClick={handleClick}>Cliquez-moi</button>;
}

```

Quand l'utilisateur clique sur le bouton, la fonction `handleClick` est exécutée et une alerte apparaît.

---

### **2. Types d'événements React**

React prend en charge un large éventail d'événements, tels que :

- **Clics de souris** : `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave`, etc.
- **Événements clavier** : `onKeyDown`, `onKeyUp`, `onKeyPress`, etc.
- **Événements de focus** : `onFocus`, `onBlur`, etc.
- **Soumission de formulaire** : `onSubmit`
- **Changements de formulaire** : `onChange`, `onInput`
- **Événements de saisie** : `onSelect`, `onCut`, `onCopy`

#### Exemple d'événement clavier avec `useState` :
```jsx

function KeyPressEvent() {
  const [key, setKey] = React.useState("");

  const handleKeyPress = (event) => {
    setKey(event.key);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyPress} />
      <p>La dernière touche pressée : {key}</p>
    </div>
  );
}

```

---

### **3. Gestion des événements dans les composants fonctionnels**

#### **3.1. Passer des arguments à un gestionnaire d'événements**

Dans les composants fonctionnels, vous pouvez passer des arguments aux gestionnaires d'événements à l'aide d'une fonction fléchée.

```jsx
function MyButton() {
  const handleClick = (message) => {
    alert(message);
  };

  return <button onClick={() => handleClick("Message personnalisé")}>Cliquez-moi</button>;
}
```

---

### **4. Prévention de l'action par défaut et propagation des événements**

React vous permet de manipuler les événements de manière plus flexible qu'avec le DOM natif. Vous pouvez, par exemple, empêcher l'action par défaut ou arrêter la propagation de l'événement.

#### **4.1. `event.preventDefault()`**
Cela empêche l'action par défaut d'être exécutée, comme la soumission d'un formulaire.

```jsx
function handleSubmit(event) {
  event.preventDefault(); // Empêche la soumission du formulaire
  console.log("Le formulaire a été soumis");
}
```

#### **4.2. `event.stopPropagation()`**
Cela empêche l'événement de se propager vers les éléments parents.

```jsx
function handleClick(event) {
  event.stopPropagation(); // Empêche la propagation de l'événement au parent
  console.log("Clic sur le bouton");
}

function ParentComponent() {
  const handleClickParent = () => {
    console.log("Clic sur le parent");
  };

  return (
    <div onClick={handleClickParent}>
      <button onClick={handleClick}>Cliquez-moi</button>
    </div>
  );
}
```

Ici, le clic sur le bouton ne va pas propager l'événement au parent grâce à `stopPropagation()`.

---

### **5. Utilisation des événements dans les hooks React**

React permet de gérer les événements de manière déclarative avec les hooks comme `useState` et `useEffect`.

#### **5.1. Exemple d'événement avec `useState`**

Voici comment vous pouvez gérer l'état d'un événement, comme un clic sur un bouton.

```jsx

function ButtonClick() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Cliquer {count} fois</button>;
}
```

Dans cet exemple, chaque clic sur le bouton incrémente le compteur `count`, qui est stocké dans l'état avec `useState`.

#### **5.2. Exemple d'événement avec `useEffect`**

Le hook `useEffect` peut être utilisé pour effectuer des actions lorsque des événements se produisent. Par exemple, vous pouvez utiliser `useEffect` pour exécuter du code après un clic ou une saisie.

```jsx

function EventWithEffect() {
  const [key, setKey] = React.useState("");

  const handleKeyPress = (event) => {
    setKey(event.key);
  };

  React.useEffect(() => {
    console.log(`La touche pressée est : ${key}`);
  }, [key]); // L'effet est exécuté chaque fois que "key" change

  return <input type="text" onKeyDown={handleKeyPress} />;
}
```

Ici, chaque fois que la touche `key` change, `useEffect` affiche la touche pressée dans la console.

---

### **6. Délégation d'événements en React**

La délégation d'événements est une technique où un événement est attaché à un élément parent, puis propagé vers les enfants. En React, cette approche est moins nécessaire, car les événements sont gérés de manière centralisée via les événements synthétiques.

Cependant, vous pouvez toujours implémenter la délégation d'événements manuellement si nécessaire :

```jsx
function App() {
  const handleClick = (event) => {
    console.log("Événement sur l'élément :", event.target);
  };

  return (
    <div onClick={handleClick}>
      <button>Enfant 1</button>
      <button>Enfant 2</button>
    </div>
  );
}
```

Dans cet exemple, un seul gestionnaire d'événements est attaché à l'élément parent (`div`). L'événement se propage à tous les enfants, et `event.target` vous permet de savoir quel bouton a été cliqué.

---

### **7. Conclusion**

Les événements en React avec des composants fonctionnels sont simples et puissants grâce à l'utilisation des hooks. React prend en charge un large éventail d'événements, que vous pouvez facilement gérer avec des fonctions fléchées et des hooks comme `useState` et `useEffect`. Ces événements sont également normalisés à travers les navigateurs, ce qui simplifie le développement d'applications interactives et réactives.


### Exercice : Création d'un compteur avec React

#### Objectif :
Créez une application simple de compteur en React. Vous aurez deux boutons : un pour incrémenter et un pour décrémenter. Le compteur commence à zéro.

#### Instructions :
1. Créez un état pour le compteur et initialisez-le à 0.
2. Ajoutez deux boutons :
   - Un bouton "incrémenter" qui augmente le compteur de 1 à chaque clic.
   - Un bouton "décrémenter" qui diminue le compteur de 1, mais empêche de décrémenter en dessous de zéro.
3. Affichez le compteur à l'écran.

#### Mise en forme :
Utilisez Tailwind CSS pour le style des boutons et du texte (mise en page simple avec un fond sombre).

---

### Exercice : Compteur avec plusieurs étapes

#### Objectif :
Créez une application React pour gérer un compteur avec deux boutons qui augmentent le compteur à un rythme différent. Un bouton augmente le compteur de 1 et l'autre de 2. Vous devez pouvoir démarrer, arrêter et réinitialiser le compteur.

#### Instructions :
1. Créez un état pour le compteur, initialisé à 0.
2. Ajoutez un bouton "Start" pour commencer à augmenter le compteur selon un pas donné.
3. Ajoutez un bouton "Stop" pour arrêter l'incrémentation.
4. Ajoutez un bouton "Reset" pour remettre le compteur à zéro.
5. Lorsque le compteur atteint une valeur maximale (par exemple, 15), affichez un message d'erreur et désactivez le bouton de démarrage.

#### Mise en forme :
Utilisez Tailwind CSS pour créer une interface propre avec des boutons qui changent de couleur au survol et un message d'erreur affiché lorsque la limite est atteinte.