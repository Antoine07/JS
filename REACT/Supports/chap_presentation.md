# Introduction à React

## Définition de React

React est une bibliothèque JavaScript développée par Facebook. Elle est utilisée pour créer des **composants réutilisables**, qui rendent des parties de l'interface utilisateur dans le DOM de manière efficace.  

### Principes fondamentaux :
- **Basé sur les composants** : React repose sur la création de blocs d'interface isolés, appelés **composants**, qui peuvent être réutilisés et combinés pour construire des interfaces complexes.  
- **Approche déclarative** : React permet de décrire comment l'interface doit apparaître en fonction de l'état des données, et se charge de mettre à jour le DOM en conséquence.  
- **Flexibilité** : Contrairement à un framework, React n'impose pas de structure stricte pour l'organisation de vos projets. Cependant, pour faciliter le développement, nous utiliserons **[Vite](https://vitejs.dev/)**, un outil moderne qui génère rapidement une structure de projet.  

---

## Le DOM virtuel

L'une des principales innovations de React est l'utilisation du **DOM virtuel**.  

- Avec des outils traditionnels comme jQuery, chaque modification dans le DOM réel peut ralentir les performances.  
- Le **DOM virtuel** de React est une abstraction qui permet de calculer efficacement les différences entre l'interface actuelle et la prochaine version, puis d'appliquer uniquement les changements nécessaires au DOM réel.  

Avantages :  
- **Performances accrues** : Réduction des manipulations directes du DOM.  
- **Portabilité** : Le DOM virtuel permet de cibler d'autres plateformes, comme React Native pour les applications mobiles ou des générateurs comme React PDF.  

---

## Structure de React : les composants

### Composants React :  
Un **composant** React est une unité de base pour créer des interfaces utilisateur. Pensez aux composants comme des **balises HTML enrichies** qui peuvent inclure de la logique JavaScript, des styles et des interactions.  

### Exemple simple de composant :
Voici un exemple basique avec JSX, la syntaxe de templating recommandée par React :  

```jsx
const Welcome = (props) => {
  return <h1>Bienvenue, {props.name}!</h1>;
};

// Utilisation du composant
<Welcome name="Alice" />
```  

Les composants peuvent gérer :  
- **Props** : Données passées d'un parent à un enfant.  
- **State** : État interne d'un composant, permettant de rendre l'interface dynamique.  

---

## Exemple pratique avec React et Vite

Pour démarrer avec React, nous recommandons d'utiliser **Vite**, un outil moderne qui facilite la configuration des projets.  

### Étapes pour créer un projet avec Vite :  
1. Créez un nouveau projet React avec la commande suivante :  
   ```bash
   npm create vite@latest my-react-app -- --template react
   ```  
2. Installez les dépendances :  
   ```bash
   cd my-react-app  
   npm install  
   ```  
3. Lancez le serveur de développement :  
   ```bash
   npm run dev  
   ```  
4. Ouvrez l'application dans le navigateur à l'adresse [http://localhost:5173](http://localhost:5173).  

---

## Exemple de rendu React

Dans vscode installez le module `Live Server` , vous devriez voir une fois votre éditeur relancé un icône Go Live en bas à droite de votre fenêtre, cliquez dessus pour exécuter le serveur de test.

Voici un exemple minimaliste de composant React dans une page HTML. Cet exemple peut être utilisé pour tester les bases :  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello React</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/javascript">
        ReactDOM.createRoot(document.getElementById('root'))
            .render(
                React.createElement('div', { style: { color: 'blue' } },
                    React.createElement('h1', null, 'Bonjour, React!')
                )
            );
    </script>
</body>
</html>
```  

*Bien que cet exemple montre le fonctionnement "pur" de React, nous utiliserons principalement des projets générés avec **Vite** pour bénéficier de la puissance de la syntaxe JSX.*  

---

## Conclusion

React est une bibliothèque puissante pour créer des interfaces utilisateur dynamiques et performantes. Grâce à des outils modernes comme **Vite**, vous pouvez rapidement démarrer vos projets et profiter d'une expérience de développement fluide.  
