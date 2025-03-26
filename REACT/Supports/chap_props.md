# Les props

Les props (ou propriétés) sont un mécanisme central de React pour passer des données d'un composant parent à un composant enfant. Elles permettent de rendre les composants réutilisables et configurables. Les props sont **en lecture seule** : une fois définies, elles ne peuvent pas être modifiées par le composant qui les reçoit.

La philosophie des développeurs de React impose que les props suivent un flux unidirectionnel, du haut vers le bas ("top-down") dans l'arbre des composants. Cela garantit une meilleure prédictibilité et une gestion simplifiée de l'état de l'application.

![props top/down](./images/props.png)

## Définir et utiliser des props

Les props sont définies sous forme de paires clé-valeur lorsqu'un composant est utilisé. Elles sont ensuite accessibles dans le composant via l'objet `props` passé en argument :

```jsx
const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const App = () => {
  return <Hello name="Alan" />;
};

export default App;
```

### Exemple avec plusieurs props

Il est possible de passer plusieurs props :

```jsx
const Welcome = (props) => {
  return (
    <div>
      <h1>Bienvenue, {props.firstName} {props.lastName}!</h1>
      <p>Âge : {props.age}</p>
    </div>
  );
};

const App = () => {
  return <Welcome firstName="Alice" lastName="Dupont" age={30} />;
};

export default App;
```

## La destructuration des props

Pour simplifier le code, il est courant d'utiliser la destructuration des props directement dans la déclaration de fonction :

```jsx
const Welcome = ({ firstName, lastName, age }) => {
  return (
    <div>
      <h1>Bienvenue, {firstName} {lastName}!</h1>
      <p>Âge : {age}</p>
    </div>
  );
};
```

## Les props par défaut

Il est possible de définir des valeurs par défaut pour les props en utilisant la propriété `defaultProps` :

```jsx
const Welcome = ({ name }) => {
  return <h1>Bienvenue, {name}!</h1>;
};

Welcome.defaultProps = {
  name: "Invité",
};

const App = () => {
  return <Welcome />; // Affichera "Bienvenue, Invité!"
};

export default App;
```

---

## Exercices pratiques

### 01 - Exercice : Messages

Créez une constante `MESSAGES` contenant une liste de messages, puis implémentez un composant `<Messages />` qui affiche chacun de ces messages à l'aide d'un sous-composant `<Message />`.

#### Données :

```js
const MESSAGES = [
    { message : "React JS" },
    { message : "React Native" },
    { message : "Angular" },
    { message : "Symfony" },
    { message : "MongoDB" },
];
```

#### Hiérarchie des composants :

```jsx
<App />   // Page principale
└── <Messages /> // Page pour présenter les messages
    ├── <Message />  // liste de composants réutilisables 
    ├── <Message />
    └── <Message />
```

**Indications** :
- Utilisez `.map()` pour parcourir les messages.
- Chaque composant doit être défini comme une fonction indépendante.

>[!NOTE]
>Une page est généralement un composant React qui correspond à une route spécifique et qui structure une partie fixe de l'interface. Elle est souvent placée dans un dossier `pages/` et utilisée avec un routeur comme TanStack Router ou React Router.
Un composant placé dans un dossier `components/` est réutilisable il, par exemple, être utilisé plusieurs fois dans différentes pages. Il encapsule une partie de l'interface qui peut être en soi indépendante (exemple : un bouton, une carte d'utilisateur, un formulaire).
Avec TanStack Router, chaque page est souvent associée à une route définie dans le routeur, et les composants peuvent être inclus dans ces pages pour construire l'interface de manière modulaire. 


---

### **02 - Exercice : Affichage des Produits avec des Couleurs Différentes**  

1. Afficher les fruits et les légumes dans **deux listes distinctes** :  
   - Une liste pour les **fruits**  
   - Une liste pour les **légumes**  
2. Ajouter un **titre** au-dessus de chaque liste :  
   - "Fruits"  
   - "Légumes"  
3. Chaque fruit doit avoir une **couleur unique**, idem pour chaque légume.  

---

### **Les données :**  

```jsx
const products = [
  { title: 'Chou', isFruit: false, id: 1, color: 'darkgreen' },
  { title: 'Ail', isFruit: false, id: 2, color: 'brown' },
  { title: 'Pomme', isFruit: true, id: 3, color: 'red' },
];
```

## Indications avec filter pour l'exercice

- **Filtrer un tableau** selon une condition  
- **Ne modifie pas l'original**, retourne un **nouveau tableau**  

```js
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4, 6]
```

🔹 **Exemple avec objets** :  
```js
const products = [
  { title: 'Chou', isFruit: false },
  { title: 'Pomme', isFruit: true }
];
const fruits = products.filter(p => p.isFruit);
console.log(fruits); // [{ title: 'Pomme', isFruit: true }]
```

### **🌟 Exemple combiné `.map()` + `.filter()` en JavaScript**  

👉 **Filtrer** une liste puis **modifier** les résultats avec `.map()`.  

```js
const products = [
  { title: 'Chou', isFruit: false },
  { title: 'Ail', isFruit: false },
  { title: 'Pomme', isFruit: true },
  { title: 'Banane', isFruit: true }
];

// 1️⃣ Filtrer uniquement les fruits
// 2️⃣ Transformer les noms en majuscules avec .map()
const fruitNames = products
  .filter(product => product.isFruit)  // 🔹 Garde uniquement les fruits
  .map(product => product.title.toUpperCase()); // 🔹 Transforme en majuscules

console.log(fruitNames); 
// Résultat : ['POMME', 'BANANE']
```

