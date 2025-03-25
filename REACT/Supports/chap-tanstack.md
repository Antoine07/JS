# Introduction à TanStack Router

Si vous êtes impatient et préférez sauter toute notre merveilleuse documentation, voici le strict minimum pour démarrer avec TanStack Router en utilisant à la fois la génération de routes basée sur les fichiers et la configuration de routes basée sur le code :

## Utilisation de la Génération de Routes Basée sur les Fichiers

La génération de routes basée sur les fichiers (via Vite et d'autres bundlers supportés) est la méthode recommandée pour utiliser TanStack Router, car elle offre la meilleure expérience, performance et ergonomie pour le moins d'effort.

### Configuration de Votre Premier Projet TanStack Router

```bash
npm create @tanstack/router@latest
# ou
pnpm create @tanstack/router
# ou
yarn create @tanstack/router
# ou
bun create @tanstack/router
# ou
deno init --npm @tanstack/router
```

Suivez les instructions pour configurer le projet.

### Configuration Manuelle

Installez TanStack Router, le plugin Vite et les outils de développement du routeur :

```bash
npm install @tanstack/react-router
npm install -D @tanstack/router-plugin @tanstack/router-devtools
# ou
pnpm add @tanstack/react-router
pnpm add -D @tanstack/router-plugin @tanstack/router-devtools
# ou
yarn add @tanstack/react-router
yarn add -D @tanstack/router-plugin @tanstack/router-devtools
# ou
bun add @tanstack/react-router
bun add -D @tanstack/router-plugin @tanstack/router-devtools
# ou
deno add npm:@tanstack/react-router npm:@tanstack/router-plugin npm:@tanstack/router-devtools
```

### Configuration du Plugin Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],
})
```

**Conseil :**

Si vous n'utilisez pas Vite ou un autre bundler supporté, vous pouvez consulter le guide de routage basé sur les fichiers pour plus d'informations.

### Création des Fichiers Suivants :

- `src/routes/__root.tsx`
- `src/routes/index.lazy.tsx`
- `src/routes/about.lazy.tsx`
- `src/main.tsx`

Tous les fichiers `routes/*.tsx` doivent exporter un objet nommé `Route`, créé en utilisant `createRootRoute` ou `createLazyFileRoute`.

🧠 Les fichiers de route avec l'extension `.lazy.tsx` sont chargés de manière paresseuse via des bundles séparés pour garder la taille du bundle principal aussi petite que possible.

### `src/routes/__root.tsx`

```typescript
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```

### `src/routes/index.lazy.tsx`

```typescript
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Bienvenue à la maison !</h3>
    </div>
  )
}
```

### `src/routes/about.lazy.tsx`

```typescript
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">Bonjour de la page À propos !</div>
}
```

### `src/main.tsx`

Que vous utilisiez le package `@tanstack/router-plugin` et exécutiez les scripts `npm run dev`/`npm run build`, ou que vous exécutiez manuellement les commandes `tsr watch`/`tsr generate` à partir de vos scripts de package, le fichier suivant sera généré pour vous à `src/routeTree.gen.ts`.

Importez l'arborescence de routes générée et créez une nouvelle instance de routeur :

```typescript
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Importez l'arborescence de routes générée
import { routeTree } from './routeTree.gen'

// Créez une nouvelle instance de routeur
const router = createRouter({ routeTree })

// Enregistrez l'instance de routeur pour la sécurité des types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Rendre l'application
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

Si vous travaillez avec ce modèle, vous devriez changer l'id du `<div>` racine dans votre fichier `index.html` en `<div id='root'></div>`.

## Utilisation de la Configuration de Routes Basée sur le Code

**Important :**

L'exemple suivant montre comment configurer les routes en utilisant du code, et pour des raisons de simplicité, il est dans un seul fichier pour cette démonstration. Bien que la génération basée sur le code permette de déclarer de nombreuses routes et même l'instance de routeur dans un seul fichier, nous recommandons de diviser vos routes en fichiers séparés pour une meilleure organisation et performance à mesure que votre application grandit.

```typescript
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Bienvenue à la maison !</h3>
      </div>
    )
  },
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Bonjour de la page À propos !</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

## Route avec des paramètres 

Créez un fichier user.$id.jsx dans le dossier des routes pour définir des routes avec paramètre.

```js
import { createFileRoute } from '@tanstack/react-router'
import User from '../pages/User'

export const Route = createFileRoute('/user/$id')({
  component: User,
})

```

Dans vos route utilisez le composant Link pour définir une route avec paramètre :

```js
 <Link to="/user/123">Voir le profil de l'utilisateur 123</Link>
```

```js
import React from 'react';
import { useParams } from '@tanstack/react-router';

function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profil de l'utilisateur</h1>
      <p>ID de l'utilisateur : {userId}</p>
    </div>
  );
}

export default UserProfile;
```