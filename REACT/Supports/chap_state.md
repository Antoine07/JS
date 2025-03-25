# **React State**

Un **state** permet d'ajouter un état local à un composant fonctionnel. Contrairement aux props, qui sont immuables et passées par un composant parent, le state peut être mis à jour localement à l'intérieur du composant. **React gère automatiquement le re-rendu du composant lorsque le state change.**  

En React, pour définir et manipuler un state dans un composant fonctionnel, nous utilisons le Hook `useState`.

---

## **Déclaration du State**

Voici un exemple de base avec `useState` :  

```jsx
function Counter() {
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
}
```

---

## **Explications**
1. **Lecture du state :**  
   - Le state est lu directement via `count`, retourné par `useState`.
2. **Mise à jour du state :**  
   - Pour modifier le state, on utilise la fonction `setCount`.  
   - ⚠️ **Ne modifiez pas le state directement** (`count++` ne fonctionne pas). Toujours utiliser `setCount(newValue)`.  

---

## **Exercices**

### **1️⃣ Exercice - Compteur avec Réinitialisation**  
👉 **Objectif :** Ajouter un bouton pour réinitialiser le compteur à 0.  

**Instructions :**  
- Ajoutez un bouton `"Reset"` qui remet le compteur à zéro lorsqu'on clique dessus.  

**Specs :**  
- Le compteur s'incrémente en cliquant sur `"Increment"`.  
- Le compteur revient à `0` lorsqu'on clique sur `"Reset"`.  

---

### **2️⃣ Exercice - Affichage d’un message conditionnel**  
👉 **Objectif :** Modifier l'affichage du message en fonction du nombre.  

**Specs :**  
- Si `count` est à 0, afficher `"Le compteur est vide"`.  
- Si `count` est supérieur à 5, afficher `"Attention, grande valeur !"`.  
- Sinon, afficher `"Valeur normale"`.  


---
