# 🎯 Objectif du TP  
Créer une **todo list** en React avec `useReducer` pour gérer l'état des tâches et `useEffect` pour persister les tâches dans `localStorage`.

---

## 🏗️ Étapes du TP

1. **Créer un projet React**  
   - Utiliser **Vite** pour créer l'application :  
     ```sh
     npm create vite@latest todo-app --template react
     cd todo-app
     npm install
     npm run dev
     ```

2. **Créer un reducer pour gérer les tâches**  
   - Un reducer avec les actions :  
     - `ADD_TODO` : Ajouter une tâche  
     - `TOGGLE_TODO` : Marquer une tâche comme complétée  
     - `REMOVE_TODO` : Supprimer une tâche  

3. **Utiliser `useEffect` pour sauvegarder les tâches**  
   - Charger les tâches depuis `localStorage` au démarrage  
   - Sauvegarder les tâches à chaque mise à jour  

4. **Créer une interface simple**  
   - Un champ texte + un bouton pour ajouter une tâche  
   - Une liste des tâches avec possibilité de les cocher ou supprimer  

---


## 🔥 Points à observer  

- `useReducer` pour centraliser la gestion des tâches.  
- `useEffect` pour synchroniser avec `localStorage`.  
- Bonne séparation des responsabilités : gestion d’état dans `reducer`, affichage dans `TodoApp`.  

---

🎯 **Challenge Bonus** : Ajouter un bouton "Tout supprimer" pour réinitialiser la liste.  