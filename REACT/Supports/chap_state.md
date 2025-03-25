# React State

Un **state** permet d'ajouter un état local à un composant fonctionnel. Contrairement aux props, qui sont immuables et passées par un composant parent, le state peut être mis à jour localement à l'intérieur du composant, et React gère automatiquement le re-rendu lorsqu'il change.

En React, pour définir et manipuler un state dans un composant fonctionnel, nous utilisons le Hook `useState`.

### Déclaration du State

Voici un exemple de base avec `useState` :

```jsx

fonction Counter(){
  // Déclaration d'un state local "count" avec une valeur initiale de 0
  const [count, setCount] = React.useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1); // ✅ Met à jour le state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

### Explications

1. **Lecture du state :** Le state est lu directement à partir de la valeur retournée par `useState` (ici, `count`).
2. **Mise à jour du state :** Pour modifier le state, on utilise la fonction retournée par `useState` (ici, `setCount`), qui déclenche un re-rendu du composant avec la nouvelle valeur.

> ⚠️ Vous **ne pouvez pas** modifier directement le state (par exemple, `count++` ne déclencherait pas de re-rendu). La mise à jour doit se faire via la fonction fournie par `useState`.

---

## Exercice 1 : Horloge avec State

Utilisez le modèle suivant : [template](../Models/model.html)

Ré-implémentez une horloge en utilisant `useState` pour gérer le temps qui passe (heures, minutes, secondes) et `useEffect` pour mettre à jour le state chaque seconde.

---
## TP : [game](../TP/01_game.md)
