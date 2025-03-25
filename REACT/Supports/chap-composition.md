# **Composition et les Props Spéciales en React**  

## **Les Props Spéciales : `children`**  

En React, la **composition** permet d’imbriquer des composants les uns dans les autres pour construire des interfaces réutilisables et modulaires. Une prop spéciale appelée `children` permet de transmettre du contenu à un composant.  

### **Exemple d'utilisation de `props.children`**  

Dans cet exemple, nous avons un composant `Widget` qui reçoit du contenu via `props.children` :  

```jsx
const Widget = (props) => {
    return (
        <div className={'sidebar ' + props.color}>
            {props.children}  
        </div>
    );
};

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Widget color="red">
                <nav>
                    <a href="#">Red sidebar</a>
                </nav>
            </Widget>
            <Widget color="yellow">
                <nav>
                    <a href="#">Yellow sidebar</a>
                </nav>
            </Widget>
        </aside>
    );
};
```

➡️ **Tout ce qui est placé à l'intérieur d'un composant `<Widget>` est accessible via `props.children` dans ce composant.**  

---

## **Création de ses propres "entrées" personnalisées**  

En plus de `children`, il est possible de passer d'autres composants en props via des noms personnalisés.  

### **Exemple : Un layout avec deux zones (`left` et `right`)**  

```jsx
const Split = (props) => {
  return (
    <div className="side">
      <div className="side-left">{props.left}</div>
      <div className="side-right">{props.right}</div>
    </div>
  );
};

const App = () => {
  return (
    <Split
      left={<Sidebar />}
      right={<Sidebar />}
    />
  );
};
```

➡️ Ici, `props.left` et `props.right` permettent d'afficher des composants distincts dans deux parties différentes du layout.  

---

## **Notion de Spécialisation**  

Un composant peut **se spécialiser** en ajoutant des éléments spécifiques tout en réutilisant un composant plus générique.  

### **Exemple : Un composant `Post` basé sur `Widget`**  

```jsx
const Post = (props) => {
  return (
    <Widget color="yellow">
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.content}</p>
    </Widget>
  );
};

const App = () => {
  return (
    <Post title="Hello React" content="React, c'est génial !" />
  );
};
```

➡️ `Post` est une spécialisation de `Widget`, qui affiche un titre et un contenu à l'intérieur d'un `Widget`.  

---

# **📝 Exercice : Ajouter des utilisateurs**  

## **Objectif**  

Vous devez créer une interface permettant d'ajouter des utilisateurs à une liste, tout en empêchant l'ajout de doublons.  

## **Données initiales**  

Voici la liste des utilisateurs de départ :  

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Alan" },
  { id: 3, name: "Phil" },
  { id: 4, name: "Naoudi" },
  { id: 5, name: "Fenley" },
];
```

## **Composants à créer**  

1. **`Dashboard`**  
   - Affiche la liste des utilisateurs.  
   - Contient un champ de saisie permettant d'ajouter un nouvel utilisateur.  
   - Vérifie que l'utilisateur n'existe pas déjà avant de l'ajouter.  

2. **`User`**  
   - Affiche le nom d’un utilisateur individuel.  

---

## **Structure des composants (Arbre React souhaité)**  

```txt
App
 ├── Dashboard (title="Dashboard User")
 │    ├── User (Alice)
 │    ├── User (Alan)
 │    ├── User (Phil)
 │    ├── User (Naoudi)
 │    ├── User (Fenley)
```

---

## **Wireframe attendu**  

```txt
[_________]  (input: ajouter un utilisateur)
[ Ajouter ]  (bouton)

- Alice
- Alan
- Phil
- Naoudi
- Fenley
```

---

## **Critères de validation**  

✔ Un utilisateur saisi ne doit pas être ajouté s'il est déjà dans la liste.  
✔ La liste des utilisateurs doit être mise à jour dynamiquement.  
✔ L'interface doit respecter l'arborescence prévue.  
