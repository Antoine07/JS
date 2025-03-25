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
<App />
└── <Messages />
    ├── <Message />
    ├── <Message />
    └── <Message />
```

**Indications** :
- Utilisez `.map()` pour parcourir les messages.
- Chaque composant doit être défini comme une fonction indépendante.

---

### 02 - Exercice : Moyenne des étudiants

Dans un fichier `index_students_avg.html`, créez une application qui affiche une liste d'étudiants avec leur nom et leur moyenne calculée.

#### Données :

```js
const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
];
```

#### Hiérarchie des composants :

```jsx
<App />
├── <Student />
├── <Student />
├── <Student />
└── <Student />
```

**Indications** :
- Créez deux composants fonctionnels : `<App />` et `<Student />`.
- Utilisez une fonction pour calculer la moyenne des notes.

---


### 03 - Exercice : Horloge

Dans un fichier `index_horloge_clock.html`, créez un composant `<Clock />` qui affiche une horloge mise à jour en temps réel.

#### Indications :
- Utilisez un `setInterval` pour re-rendre le composant toutes les secondes.
- Générez l'heure actuelle avec `new Date()`.

#### Exemple attendu :

```txt
10h 25m 30s
```

#### Exemple de structure :

```jsx
const Clock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return (
    <div>
      {hours}h {minutes}m {seconds}s
    </div>
  );
};


```

