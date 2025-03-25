### Introduction rapide sur l'Asynchrone en JavaScript

L'asynchrone en JavaScript permet de gérer les opérations longues, comme les appels API ou les accès à des fichiers, sans bloquer l'exécution du programme.

Quand une opération asynchrone (comme une requête API, ou un setTimeout) est appelée, elle est envoyée à la file d'attente (event queue). Elle sera ensuite exécutée lorsque le call stack (pile d'appel) sera vide, ce qui permet à JavaScript de continuer à exécuter d'autres tâches pendant que l'opération attend son tour dans la file d'attente.

#### 1. **Promesses (Promises)**

Les **promesses** sont des objets représentant la valeur d'une opération qui n'est pas encore terminée mais qui le sera à un moment donné. Une promesse peut être dans l'un des états suivants :
- **Pending** (en attente)
- **Resolved** (réussie)
- **Rejected** (échouée)

```javascript
let promise = new Promise((resolve, reject) => {
  // Opération asynchrone
  if (/* succès */) {
    resolve("Succès");
  } else {
    reject("Erreur");
  }
});
```

#### 2. **Async/Await**

- **`async`** : transforme une fonction en une fonction qui retourne toujours une promesse.
- **`await`** : permet d'attendre qu'une promesse soit résolue avant de continuer l'exécution du code.

```javascript
async function example() {
  let result = await fetch('url'); // attend la réponse
  console.log(result);
}
```

#### 3. **Gestion des erreurs**

Les erreurs dans les fonctions asynchrones peuvent être capturées avec un bloc `try/catch` à l'intérieur de la fonction `async`.

```javascript
async function fetchData() {
  try {
    let response = await fetch('url');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

#### 4. **Avantages**

- **Non-bloquant** : L'exécution du programme continue pendant que l'opération asynchrone est en cours.
- **Code plus lisible** : Avec `async/await`, les chaînes de promesses et les callbacks imbriqués sont évités, rendant le code plus facile à comprendre.

#### 5. **Exemples d'utilisation**
- **Requêtes HTTP** avec `fetch`
- **Lecture de fichiers**
- **Temps d'attente ou délais** avec `setTimeout`/`setInterval`

L'asynchrone permet d'écrire des applications réactives et efficaces, particulièrement pour des interactions réseau ou des calculs longs.