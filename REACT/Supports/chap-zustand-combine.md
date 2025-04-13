# 🎯 Zustand – Middleware `combine`

## 🧩 Pourquoi `combine` ?

Lorsque on crée un store avec Zustand, on peut gérer l'état et les actions "ensemble". Mais quand l’état devient plus complexe, il peut être utile de bien **séparer l’état (les données)** des **actions (les fonctions)**.

👉 Le middleware `combine` sert à ça :  
Il permet de structurer proprement son store avec **deux blocs bien distincts** :
- un objet pour l’état initial
- une fonction pour les actions

---

## 📦 Installation (si tu ne l’as pas déjà)

```bash
npm install zustand
```

---

## 🛠️ Utilisation de `combine` (sans TypeScript)

### 📁 Fichier : `useIncrementStore.js`

```js
import { create } from "zustand";
import { combine } from "zustand/middleware";

// Ici on crée un store qui contient un compteur et une action pour le modifier
const useStore = create(
  combine(
    // 👈 1. État initial
    {
      count: 0
    },

    // 👈 2. Actions (on reçoit `set` pour modifier le state)
    (set) => ({
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 })
    })
  )
);

export default useStore;
```

---

## 👨‍🏫 Dans le composant React

```jsx
import React from "react";
import useStore from "./useIncrementStore";

function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const reset = useStore((state) => state.reset);

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

## 📌 Résumé : avantages de `combine`

✅ On sépare bien l’état initial et les actions.
✅ C’est plus lisible, surtout quand son état devient plus grand ou complexe.

---


Voici le **cours révisé** sur Zustand et le middleware `combine`, rédigé dans un **registre formel** (sans tutoiement), et incluant une **comparaison claire** avec un store Zustand classique, **sans utiliser TypeScript** :

---

# 🎯 Zustand – Middleware `combine` (sans TypeScript)

## 🧩 Pourquoi utiliser `combine` ?

Dans Zustand, il est possible de gérer l’état et les actions librement à l’intérieur d’un store. Cependant, lorsque l’état de l’application devient plus complexe, il devient pertinent de **séparer clairement les données (état)** des **fonctions qui les modifient (actions)**.

Le middleware `combine` permet précisément cela :  
✅ une **organisation claire** du store  
✅ une meilleure **lisibilité**  
✅ une **évolution facilitée** de l’état global

## 🎓 TP proposé (note sur 5 points)

> Créer une petite application interactive utilisant `combine`  

### Fonctionnalités attendues :

- Ajouter un produit au panier (depuis un champ texte)
- Supprimer un produit du panier
- Vider entièrement le panier
- Afficher le nombre total de produits

### Exemple de structure du store :

```js
combine(
  { cart: [] },
  (set) => ({
    addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeItem: (index) =>
      set((state) => ({
        cart: state.cart.filter((_, i) => i !== index)
      })),
    clearCart: () => set({ cart: [] })
  })
)
```
