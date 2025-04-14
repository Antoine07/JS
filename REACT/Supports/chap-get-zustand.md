# 🧩 Dans Zustand : `get` sert à lire **l’état actuel complet** à un moment donné.

---

### 🔄 Contexte :
Quand tu crées ton store avec :

```js
create((set, get) => ({
  ...
}))
```

- `set` = permet de **modifier** l’état  
- `get` = permet de **lire** l’état actuel à l'intérieur des fonctions du store

---

### 🧠 Exemple concret :

```js
resetIfAbove10: () => {
  const { count } = get(); // on lit la valeur actuelle de count
  if (count > 10) {
    set({ count: 0 }); // on modifie l'état si count > 10
  }
}
```

Ici :
- `get()` retourne **tout l’état actuel** (comme si tu faisais `useCounterStore.getState()`).
- Tu peux l’utiliser pour prendre une décision, comme ici : si `count` dépasse 10 → on le remet à 0.

---

### ⚠️ À ne pas confondre avec :

- `useCounterStore((state) => state.count)` → ça, c’est dans le composant React, pour **écouter** une partie de l’état et re-render automatiquement.
- `get()` → c’est **à l’intérieur du store**, quand tu veux lire l’état **sans** déclencher de re-render.
