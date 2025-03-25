# Persist

## **Cours sur la persistance des données avec Zustand**

### **Introduction**
La bibliothèque Zustand permet de gérer facilement l'état global dans vos applications. Grâce à la middleware `persist`, il est possible de sauvegarder cet état dans un stockage, tel que `localStorage`, `sessionStorage` ou une solution asynchrone comme `AsyncStorage`. Cela permet de conserver les données entre les sessions ou après un rafraîchissement de page.

---

### **Utilisation de la middleware `persist`**

#### **Installation**
Assurez-vous d'avoir installé Zustand et ses middlewares :
```bash
npm install zustand
```

#### **Exemple simple**
Voici un exemple pour créer un store avec Zustand et sauvegarder les données dans `sessionStorage` :
```javascript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'bear-storage', // Clé unique dans le stockage
      storage: createJSONStorage(() => sessionStorage), // Par défaut, localStorage est utilisé
    }
  )
);
```

Dans cet exemple :
- **`persist`** : Active la persistance des données.
- **`name`** : Détermine la clé sous laquelle les données seront sauvegardées.
- **`storage`** : Permet de spécifier le type de stockage (ici `sessionStorage`).

---

### **Options avancées**

#### **Filtrage des données persistées (`partialize`)**
Vous pouvez choisir quelles parties de l'état doivent être sauvegardées.
```javascript
export const useStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
      baz: 2,
    }),
    {
      name: 'filtered-storage',
      partialize: (state) => ({ foo: state.foo, bar: state.bar }),
    }
  )
);
```
Dans cet exemple, seul `foo` et `bar` seront stockés.

---

#### **Hydratation (`onRehydrateStorage`)**
Ajoutez des actions lors du processus de récupération des données sauvegardées :
```javascript
export const useStore = create(
  persist(
    (set, get) => ({
      count: 0,
    }),
    {
      name: 'rehydration-example',
      onRehydrateStorage: () => {
        console.log('Hydration commence');
        return (state, error) => {
          if (error) {
            console.error('Erreur lors de l\'hydratation', error);
          } else {
            console.log('Hydratation terminée avec succès');
          }
        };
      },
    }
  )
);
```

---

#### **Gestion des versions (`version` et `migrate`)**
Pour gérer les changements de structure dans votre store :
```javascript
export const useStore = create(
  persist(
    (set) => ({
      newField: 0,
    }),
    {
      name: 'versioned-storage',
      version: 1,
      migrate: (persistedState, version) => {
        if (version === 0) {
          persistedState.newField = persistedState.oldField;
          delete persistedState.oldField;
        }
        return persistedState;
      },
    }
  )
);
```
- **`version`** : Changez ce numéro pour déclencher une migration.
- **`migrate`** : Transforme l'état sauvegardé pour correspondre à la nouvelle version.

---

### **API supplémentaire**

#### **Réhydratation manuelle**
Pour des cas spécifiques, vous pouvez réhydrater le store manuellement :
```javascript
useStore.persist.rehydrate();
```

#### **Effacer le stockage**
Pour réinitialiser les données sauvegardées :
```javascript
useStore.persist.clearStorage();
```

#### **Vérifier l'état d'hydratation**
Pour vérifier si les données ont été réhydratées :
```javascript
const isHydrated = useStore.persist.hasHydrated();
console.log('Hydratation terminée ?', isHydrated);
```

---

### **Performance et stockage asynchrone**

L'utilisation de stockage asynchrone, comme `AsyncStorage`, introduit un délai d'hydratation, ce qui peut entraîner un état initial vide. Vous pouvez contourner cela en retardant l'utilisation des données persistées jusqu'à la fin de l'hydratation :
```javascript
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  const bears = useStore((state) => state.bears);
  return <div>{bears} ours dans la forêt</div>;
}
```

---

### **Cas pratiques**
1. **Compteur avec persistance :**
   - Créez un compteur qui conserve sa valeur même après un rafraîchissement de page.
2. **To-Do List :**
   - Implémentez une liste de tâches sauvegardée dans `localStorage`.
3. **Gestion des utilisateurs :**
   - Stockez des informations utilisateur avec un champ qui migre entre deux versions.

---

### **Conclusion**
Avec la middleware `persist`, Zustand devient une solution puissante pour gérer la persistance des données. Que vous utilisiez `localStorage`, `sessionStorage`, ou une autre solution, vous avez un contrôle total sur les données sauvegardées et leur hydratation.