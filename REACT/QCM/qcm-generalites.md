# QCM React et JavaScript

## Question 1  
Que signifie JSX ?  

*Réponses* :  
* [ ] C'est un langage qui permet de générer des objets avec une notation HTML.  
* [ ] C'est un langage qui permet de typer des variables et objets JS.  
* [ ] C'est un langage qui permet de générer des classes avec une notation HTML.  
* [ ] C'est un langage qui permet de générer des objets avec une notation XML.  

## Question 2  

Définissez simplement ce que représente le DOM virtuel en choisissant une seule et unique définition ci-dessous :  

*Réponses* :  
* [ ] C'est une représentation du DOM réel sous forme d'une arborescence XML.  
* [ ] C'est une représentation du DOM réel sous forme d'objets simples JS.  
* [ ] C'est une représentation du DOM réel sous forme de fonctions écrites en C.  
* [ ] C'est une représentation du DOM réel sous forme de tableau JS et XML.  

## Question 3  

Est-ce que le code dans le fichier App.js suivant est valide ?  

```js
const Message = (props) => {
    props.message = "Nouveau message";
    return (
        <p>{props.message}</p>
    );
};
const App = () => <Message message="message" />;
```  

*Réponses* :  
* [ ] Oui car la propriété est passée par décomposition.  
* [ ] Oui car les propriétés sont mutables.  
* [ ] Non car les propriétés sont en lecture seule.  

## Question 4  

Est-ce que le code React suivant est valide ?  

```js
const Post = () => {
    return (
        <p>post</p>
    );
};
const App = () => (
    <Post />
    <Post />
    <Post />
);
```  

*Réponses* :  
* [ ] Il est valide et affichera trois paragraphes dans le DOM.  
* [ ] Il est valide et affichera un paragraphe dans le DOM.  
* [ ] Il n'est pas valide, le code produira une erreur.  
**Il faut un élément conteneur pour les composants**

## Question 5  

Que permet la méthode `setInterval` en JavaScript ?  

*Réponses* :  
* [ ] Exécuter une fonction en boucle après un délai spécifié.  
* [ ] Exécuter une fonction immédiatement après un délai spécifié.  
* [ ] Exécuter une fonction une seule fois après un délai spécifié.  
* [ ] Exécuter une fonction tant que la promesse associée est résolue.  

---

## Question 6  

Que se passera-t-il si le code suivant est exécuté ?  

```js
setInterval(() => {
    let count = 0;
    console.log(count);
    count++;
}, 1000);
```  

*Réponses* :  
* [ ] Le code affichera un compteur qui augmente de 1 toutes les secondes.  
* [ ] Le code affichera toujours `0` toutes les secondes.  
* [ ] Le code produira une erreur car `count` est réinitialisé dans chaque intervalle.  
* [ ] Le code produira une erreur car `setInterval` ne peut pas utiliser une variable locale.  

---

## Question 7  

Quelle est la différence entre le DOM virtuel et le DOM réel dans React ?  

*Réponses* :  
* [ ] Le DOM réel est plus rapide que le DOM virtuel car il interagit directement avec le navigateur.  
* [ ] Le DOM virtuel est une abstraction qui permet d'appliquer les modifications de manière optimisée au DOM réel.  
* [ ] Le DOM virtuel est une alternative au DOM réel et n'interagit pas avec le navigateur.  
* [ ] Le DOM réel et le DOM virtuel sont identiques, mais écrits dans des langages différents.  

## Question 8  

Quelle est la bonne façon de transmettre une propriété dans le composant React suivant ?  

```js
const Welcome = (props) => <h1>{props.message}</h1>;
```  

*Réponses* :  
* [ ] `<Welcome />`  
* [ ] `<Welcome message="Bonjour !" />`  
* [ ] `<Welcome>{message: "Bonjour !"}</Welcome>`  
* [ ] `<Welcome message={function() { return "Bonjour !" }} />`  

---

## Question 9  

Que signifie le fait que JavaScript est asynchrone ?  

*Réponses* :  
* [ ] JavaScript exécute les instructions dans l'ordre exact où elles sont écrites, sans attendre les opérations lentes.  
* [ ] JavaScript exécute les instructions dans l'ordre exact où elles sont écrites et attend la fin de chaque opération avant de continuer.  
* [ ] JavaScript utilise un modèle basé sur un gestionnaire d'événements pour exécuter certaines opérations indépendamment du fil principal.  
* [ ] JavaScript nécessite plusieurs threads pour exécuter des opérations simultanément.  

--- 

Voici cinq questions axées sur les props, le principe top-down et la réutilisabilité en React :

---

## Question 10

Quel est le rôle des props en React ?  

*Réponses* :  
* [ ] Elles permettent de stocker des données locales dans un composant.  
* [ ] Elles permettent de transmettre des données d’un composant parent à un composant enfant.  
* [ ] Elles remplacent complètement l’état (`useState`).  
* [ ] Elles sont utilisées uniquement dans les composants de classe.  

---

## Question 11

Pourquoi dit-on que React suit un modèle "top-down" pour la gestion des données ?  

*Réponses* :  
* [ ] Parce que les données circulent uniquement du bas vers le haut dans l’arborescence des composants.  
* [ ] Parce que les composants enfants peuvent directement modifier les données du composant parent.  
* [ ] Parce que les données sont transmises des composants parents vers les composants enfants via les props.  
* [ ] Parce que React utilise une base de données interne pour partager les données entre tous les composants.  

---

## Question 12

Comment un composant enfant peut-il modifier une donnée transmise via les props ?  

*Réponses* :  
* [ ] Il ne peut pas modifier directement une prop, mais peut appeler une fonction passée par le parent pour modifier l’état.  
* [ ] Il peut modifier directement la valeur de la prop avec `setProps()`.  
* [ ] Il peut utiliser `useState` pour modifier la prop reçue.  
* [ ] Il doit créer une nouvelle prop et la renvoyer au parent.  

---

## Question 13

Pourquoi est-il recommandé de rendre les composants réutilisables en React ?  

*Réponses* :  
* [ ] Pour éviter de dupliquer du code et faciliter la maintenance.  
* [ ] Pour que chaque composant ait son propre état et soit indépendant.  
* [ ] Pour améliorer les performances en exécutant le code plus rapidement.  
* [ ] Pour s'assurer que chaque composant possède un style unique.  

---

## Question 14

Quelle est la meilleure pratique pour rendre un composant flexible et réutilisable avec les props ?  

*Réponses* :  
* [ ] Ne jamais utiliser de props et coder chaque variation du composant séparément.  
* [ ] Utiliser des props avec des valeurs par défaut et permettre des personnalisations via des props dynamiques.  
* [ ] Toujours stocker toutes les valeurs possibles dans un `store` interne au composant.  
* [ ] Ajouter une prop unique pour chaque variante d’affichage possible, même si elles sont inutilisées.  

---
