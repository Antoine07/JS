Voici votre cours révisé pour qu'il soit homogène avec ma présentation. Le contenu a été structuré de manière claire et cohérente pour une lecture fluide.

---

# Immer dans Zustand

**`immer`** est une bibliothèque qui simplifie la gestion de l'immuabilité dans vos états. Avec Zustand, **`immer`** permet de modifier un état comme s'il était mutable tout en garantissant sa nature immuable. Cela facilite les mises à jour d'états complexes sans avoir à écrire manuellement des copies profondes.

### Pourquoi utiliser `immer` ?
1. **Gestion simplifiée de l'immuabilité** : Vous manipulez l'état directement comme un objet mutable, et Immer crée une version immuable sous le capot.
2. **Réduction des erreurs** : En évitant les manipulations directes de références, Immer protège l'état d'origine.
3. **Amélioration de la lisibilité** : Le code est plus intuitif, en particulier pour les structures d'état imbriquées.

---

### Configuration d'`immer` avec Zustand

Pour utiliser **`immer`** dans Zustand, vous devez intégrer le middleware dédié.

#### Installation
```bash
npm install immer
```

#### Exemple de Store avec `immer`
Voici un exemple où nous gérons une liste de tâches à l'aide de Zustand et Immer.

```javascript
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
  immer((set) => ({
    todos: [],
    addTodo: (todo) =>
      set((state) => {
        state.todos.push(todo); // Immer gère l'ajout sans casser l'immuabilité
      }),
    removeTodo: (index) =>
      set((state) => {
        state.todos.splice(index, 1); // Suppression directe gérée de manière immuable
      }),
  }))
);

export default useStore;
```

---

### Utilisation du Store dans les Composants

#### Exemple 1 : Ajouter une tâche
```javascript
import React, { useState } from "react";
import useStore from "./store";

function AddTodo() {
  const [task, setTask] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  const handleSubmit = () => {
    addTodo({ id: Date.now(), task }); // Ajoute une tâche avec un ID unique
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleSubmit}>Ajouter</button>
    </div>
  );
}

export default AddTodo;
```

#### Exemple 2 : Afficher et supprimer des tâches
```javascript
import React from "react";
import useStore from "./store";

function TodoList() {
  const todos = useStore((state) => state.todos); // Accède à la liste des tâches
  const removeTodo = useStore((state) => state.removeTodo); // Supprime une tâche

  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => removeTodo(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

### Ce qui se passe avec `immer` :
1. **Modifications directes** : Vous manipulez l'état comme un objet mutable avec des opérations comme `push` ou `splice`.
2. **État immuable garanti** : Immer crée une nouvelle version immuable de l'état après chaque modification.
3. **Simplicité accrue** : Pas besoin de copier ou de recréer l'état manuellement (par exemple avec `...state`).

---

### Avantages d'utiliser `immer` avec Zustand
- **Simplicité** : Vous pouvez gérer des états complexes sans vous soucier des mutations involontaires.
- **Lisibilité du code** : Les mises à jour d'état sont plus intuitives et ressemblent à des manipulations directes.
- **Moins de bugs** : Immer protège l'intégrité de votre état, réduisant ainsi les erreurs liées aux références.

Avec cette approche, vous pouvez combiner la puissance de Zustand avec la simplicité d'Immer pour des applications maintenables et performantes.