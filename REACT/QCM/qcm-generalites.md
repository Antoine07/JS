# QCM React et JavaScript

## Question 1  
Que signifie JSX ?  

*Réponses* :  
* [X] C'est un langage qui permet de générer des objets avec une notation HTML.  
* [ ] C'est un langage qui permet de typer des variables et objets JS.  
* [ ] C'est un langage qui permet de générer des classes avec une notation HTML.  
* [ ] C'est un langage qui permet de générer des objets avec une notation XML.  

## Question 2  

Définissez simplement ce que représente le DOM virtuel en choisissant une seule et unique définition ci-dessous :  

*Réponses* :  
* [ ] C'est une représentation du DOM réel sous forme d'une arborescence XML.  
* [X] C'est une représentation du DOM réel sous forme d'objets simples JS.  
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
* [X] Non car les propriétés sont en lecture seule.  

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
* [X] Il n'est pas valide, le code produira une erreur.  
**Il faut un élément conteneur pour les composants**

## Question 5  

Que permet la méthode `setInterval` en JavaScript ?  

*Réponses* :  
* [X] Exécuter une fonction en boucle après un délai spécifié.  
* [ ] Exécuter une fonction immédiatement après un délai spécifié.  
* [ ] Exécuter une fonction une seule fois après un délai spécifié.  
* [ ] Exécuter une fonction tant que la promesse associée est résolue.  

## Question 6  

Quel est le problème potentiel de l'exemple suivant en utilisant `setInterval` ?  

```js
let count = 0;
setInterval(() => {
    console.log(count);
    count++;
}, 1000);
```  

*Réponses* :  
* [ ] Le code produira une erreur car `setInterval` nécessite une promesse.  
* [ ] Le code produit une boucle infinie si `count` n'est pas réinitialisé.  
* [ ] Le code produira une erreur car `setInterval` ne fonctionne qu'avec des nombres.  
* [X] Il n'y a pas de problème, le code affichera simplement `count` toutes les secondes.  

---

## Question 7  

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
* [X] Le code affichera toujours `0` toutes les secondes.  
* [ ] Le code produira une erreur car `count` est réinitialisé dans chaque intervalle.  
* [ ] Le code produira une erreur car `setInterval` ne peut pas utiliser une variable locale.  

---

## Question 8  

Quelle est la différence entre le DOM virtuel et le DOM réel dans React ?  

*Réponses* :  
* [ ] Le DOM réel est plus rapide que le DOM virtuel car il interagit directement avec le navigateur.  
* [X] Le DOM virtuel est une abstraction qui permet d'appliquer les modifications de manière optimisée au DOM réel.  
* [ ] Le DOM virtuel est une alternative au DOM réel et n'interagit pas avec le navigateur.  
* [ ] Le DOM réel et le DOM virtuel sont identiques, mais écrits dans des langages différents.  

## Question 9  

Quelle est la bonne façon de transmettre une propriété dans le composant React suivant ?  

```js
const Welcome = (props) => <h1>{props.message}</h1>;
```  

*Réponses* :  
* [ ] `<Welcome />`  
* [X] `<Welcome message="Bonjour !" />`  
* [ ] `<Welcome>{message: "Bonjour !"}</Welcome>`  
* [ ] `<Welcome message={function() { return "Bonjour !" }} />`  

---

## Question 10  

Que signifie le fait que JavaScript est asynchrone ?  

*Réponses* :  
* [ ] JavaScript exécute les instructions dans l'ordre exact où elles sont écrites, sans attendre les opérations lentes.  
* [ ] JavaScript exécute les instructions dans l'ordre exact où elles sont écrites et attend la fin de chaque opération avant de continuer.  
* [X] JavaScript utilise un modèle basé sur un gestionnaire d'événements pour exécuter certaines opérations indépendamment du fil principal.  
* [ ] JavaScript nécessite plusieurs threads pour exécuter des opérations simultanément.  

--- 
