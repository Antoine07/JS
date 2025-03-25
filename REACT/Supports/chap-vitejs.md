# Vite JS

[Vite](https://vite.dev/guide)

### **Prérequis**
Assurez-vous que les éléments suivants sont installés :
1. **Node.js** (version 14 ou supérieure, idéalement la version LTS).
   - Vérifiez avec `node -v` dans le terminal.
2. **npm** ou **yarn** (généralement inclus avec Node.js).

---

### **Créer un projet avec Vite.js**
1. Ouvrez un terminal ou une invite de commande.
2. Exécutez la commande suivante pour créer un projet avec Vite :

```bash
npm create vite@latest my-react-app
```

---

### **Installer les dépendances**
Après avoir créé le projet, entrez dans le dossier du projet et installez les dépendances nécessaires :

```bash
cd my-react-app
npm install
```

---

### **Structure d’un projet Vite.js avec React**
Une fois le projet créé, voici la structure des fichiers :
```
my-react-app/
├── public/          # Fichiers statiques
├── src/
│   ├── App.jsx      # Composant principal
│   ├── main.jsx     # Bootstrap - amorçage de l'application 
│   └── index.css    # Feuille de styles globale
├── package.json     # Fichier de configuration npm
├── index.html       # Point d'entrée de l'application 
├── vite.config.js   # Configuration de Vite
```

---

### **Démarrer le serveur de développement**
Pour démarrer le serveur de développement, exécutez :

```bash
npm run dev
```

- Accédez à l'application dans votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`).

---

### **Modifier le projet React**
1. Ouvrez le fichier `src/App.jsx` pour modifier le composant principal.
2. Exemple d'un composant simple :

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React avec Vite.js !</h1>
      <p>Vite est super rapide 🚀</p>
    </div>
  );
}

export default App;
```

Voici un tutoriel détaillé pour intégrer **Tailwind CSS** dans votre projet, que ce soit un projet existant ou un nouveau projet (par exemple, avec React et Vite.js).

---
### **Installer Tailwind CSS**

Pensez à consutler la documentation : [tailwindcss](https://tailwindcss.com)

#### **Pour un projet existant**
Si vous avez déjà un projet (par exemple, un projet React avec Vite), commencez par installer Tailwind CSS :

1. Ouvrez votre terminal dans le répertoire de votre projet.
2. Exécutez la commande suivante pour installer Tailwind et ses dépendances :

```bash
npm install tailwindcss @tailwindcss/vite
```

3. Modifiez le fichier vite `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})

```

---

### **Ajouter Tailwind dans votre fichier CSS**

1. Localisez le fichier CSS principal de votre projet (par exemple, `src/index.css`).
2. Remplacez son contenu par les directives de base de Tailwind :

```css
@import "tailwindcss";
```

Modifiez le fichier `App.jsx`, remplacez le par le code suivant :

```js
function App() {

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App
```

---

### **Étape 4 : Démarrer le projet**

1. Si vous utilisez Vite, démarrez votre serveur de développement :

```bash
npm run dev
```

### Mettre en Dark votre application

1. Dans votre fichier `index.css` 

```css
@import "tailwindcss";
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

2. Dans le fichier `index.html`

Ajoutez les bonnes classes au html et body

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body data-theme="dark" class="bg-white dark:bg-black" >
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

