# Les Hooks en React

Les Hooks, introduits dans React 16.8, permettent d'utiliser les états et d'autres fonctionnalités de React dans les composants fonctionnels. Cela offre une approche fonctionnelle pour définir des composants et rend le code plus modulaire et performant.

Dans ce chapitre, nous travaillerons avec des fichiers uniques pour explorer les Hooks. Par la suite, nous appliquerons ces concepts dans des projets plus complexes.

---

## Pourquoi les Hooks ?

Avant les Hooks, seules les classes pouvaient utiliser les états et le cycle de vie. Les Hooks rendent ces fonctionnalités disponibles dans les composants fonctionnels, ce qui simplifie la logique et encourage la réutilisation.

Exemple de composant fonctionnel basique :

```jsx
function App(props) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
}

ReactDOM.render(
  <App content="Bonjour React" />,
  document.getElementById('root')
);
```

Avec les Hooks, ce composant peut également gérer un état ou réagir à des changements.

---

## Règles d'utilisation des Hooks

1. **Les Hooks doivent être appelés au niveau racine des fonctions de composants.**
   - Ne les appelez pas dans des boucles, des conditions ou des fonctions imbriquées.

2. **Les Hooks doivent être appelés uniquement dans des composants React ou des Hooks personnalisés.**
   - Ne les appelez pas depuis des fonctions JavaScript classiques.

---

## Gestion de l'état avec `useState`

Le Hook `useState` permet d'ajouter un état local à un composant fonctionnel.

### Exemple :

```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez-moi</button>
    </div>
  );
};

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
```

**Points clés :**
- `useState` retourne un tableau avec deux éléments : l'état actuel et une fonction pour le mettre à jour.
- Vous pouvez utiliser plusieurs appels à `useState` dans un même composant pour gérer différents états.

---

## Gestion des effets de bord avec `useEffect`

### Exercices - testez ce code 

Nous allons créer un composant qui affiche un message après un délai défini, mais qui **annule le timeout** si le composant est retiré du DOM avant la fin du délai.

---

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Toggle with useEffect</title>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">

    const { useState, useEffect } = React;

    const MessageApp = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        let timer;
        if (isVisible) {
          timer = setTimeout(() => {
            setIsVisible(false);
          }, 5000); // Message disappears after 5 seconds
        }

        // Cleanup function
        return () => {clearTimeout(timer); console.log( isVisible ? 'démontage' : 'montage')}
      }, [isVisible]);

      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={() => setIsVisible(true)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Show Message
          </button>
          {isVisible && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#007BFF",
                color: "white",
                borderRadius: "5px",
                display: "inline-block",
                fontSize: "18px",
              }}
            >
              This is a temporary message!
            </div>
          )}
        </div>
      );
    };

    ReactDOM.render(<MessageApp />, document.getElementById("root"));
  </script>
</body>
</html>

```

---

### Fonctionnement répondez aux questions suivantes 

1. **Que se passe t il au montage :**
  
2. **Au démontage Démontage :**
  
---

### 📝 **Énoncé de l'exercice : Calculatrice en React**  

#### **Objectif**  
Créer une calculatrice interactive en React permettant d’effectuer des opérations simples (addition, soustraction, multiplication, division) entre deux nombres saisis par l'utilisateur.

---

#### **Consignes**  

1. **Créer un composant `Calculator` qui :**  
   - Contient deux champs de saisie permettant d’entrer des nombres.  
   - Possède une liste déroulante (`select`) pour choisir une opération (+, -, ×, ÷).  
   - Affiche un bouton "Calculer" qui effectue l’opération sélectionnée lorsque l’on clique dessus.  
   - Affiche le résultat du calcul sous le bouton.  

2. **Gestion des erreurs :**  
   - Empêcher l’utilisateur d’effectuer une division par zéro (afficher un message d’erreur dans ce cas).  
   - Vérifier que les entrées sont bien des nombres avant de faire le calcul.  

---

#### **Exemple attendu**  

📌 **L’utilisateur entre :**  
- **Nombre 1** → `10`  
- **Opération** → `×`  
- **Nombre 2** → `5`  
- **Clique sur "Calculer"**  

🖥 **Affichage :** `Résultat : 50`  

📌 **Si l’utilisateur tente de diviser par zéro :**  
🖥 **Affichage :** `Erreur : division par zéro`  

---

#### **Spec supplémentaires :**  
✅ **Ajouter un bouton "Réinitialiser"** pour effacer les champs et le résultat.  
✅ **Ajoutez une fonction mémoire à votre calculatrice.  
✅ **Utilisez un useEffect pour améliorer l'expérience utilisateur. 
---

### **Livrable**  
Un fichier HTML contenant le code React de la calculatrice, fonctionnant avec Babel (comme dans le cours).  
