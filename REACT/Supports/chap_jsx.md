# React JSX

JSX est une syntaxe facilitant l'écriture du code des composants. Il sécurise également l'affichage des valeurs en échappant tous les caractères spéciaux, ce qui protège contre les attaques XSS.

On utilise la casse **camelCase** pour les noms d'attributs en JSX.

```jsx
const el = <div className="main">Main</div>;
```

---

## Exemple de JSX

En JSX, on écrit :

```jsx
const el = (
  <h1 className="main">
    Hello, world!
  </h1>
);
```

En JavaScript pur, cela équivaut à :

```js
const el = React.createElement(
  'h1',
  { className: 'main' },
  'Hello, world!'
);
```

Dans ce cours, tous les développements seront réalisés en JSX.

>[!IMPORTANT]
> **Remarque** : La syntaxe JSX nécessite un **compilateur**. Dans ce cours, nous utilisons **[Babel](https://babeljs.io/)**, qui sera inclus directement dans le fichier `index.html` pour convertir le code JSX en JavaScript compréhensible par les navigateurs.

---

## Exemple fonctionnel en JSX

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Hello React</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
    <style>
        .heading {
            color: purple;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const Hello = (props) => (
            <div className="heading">
                <h1>{props.message}</h1>
                <p>{props.subtitle}</p>
            </div>
        );

        ReactDOM.createRoot(document.getElementById('root')).render(
            <Hello message="Hello React" subtitle="Enjoy!" />
        );
    </script>
</body>
</html>
```

## 01 Exercice

Créez une page qui affiche votre nom et prénom. 

## 02 Exercice

Créez une page avec 2 composants et un composant racine App, le premier composant : nom prénom et deuxième le deuxième composant votre bio.

---

## Attributs en JSX

Les attributs sont passés aux balises en utilisant des chaînes de caractères entre guillemets ou des expressions JavaScript entre accolades.

```jsx
// Avec une chaîne de caractères
const el1 = <div className="main">Main</div>;

// Avec une expression JavaScript
const myStyle = { backgroundColor: 'red', color: 'blue', marginTop: 5 };
const el2 = <div style={myStyle}>Main</div>;
```

---

## Gestion des balises enfants

Pour inclure plusieurs enfants, vous devez encapsuler les éléments dans une balise parent. Une balise `<div>` est souvent utilisée, mais nous verrons plus tard comment utiliser les **fragments React** pour simplifier cela.

```jsx
const el3 = (
  <div>
    <h1>Bonjour !</h1>
    <h2>Le Monde.</h2>
  </div>
);
```

---

## Protection contre les attaques XSS

JSX protège automatiquement contre les injections XSS en échappant les caractères spéciaux.

```jsx
const content = <script>alert('xss')</script>;
// Ceci est sans risque :
const el4 = <h1>{content}</h1>;
```

---

## Parcourir un tableau en JSX

Pour afficher un tableau dans le rendu d'un composant, utilisez la méthode `.map()`. Assurez-vous que chaque élément a une clé unique (attribut `key`) pour une meilleure gestion du DOM par React.

```jsx
const Hello = () => {
    const elems = ['a', 'b', 'c', 'd'];
    return (
        <div className="heading">
            {elems.map((elem, i) => (
                <p key={i}>{elem}</p>
            ))}
        </div>
    );
};
```

---

## **Exercice 01**

**Objectif :** Créez deux composants React.  
- Le premier composant est un conteneur qui structure l'affichage.  
- Le deuxième composant doit afficher des nombres élevés à la puissance 3.

### Données de départ

```js
// Valeurs à élever à la puissance 3 
const numbers = [4, 3, 7];
```

### Résultat attendu :

```text
Wrapper
├── Number : devra afficher "64" (4**3)
├── Number : devra afficher "27" (3**3)
└── Number : devra afficher "823543" (7**7)
```


### JSX - protection XSS

Une attaque XSS (Cross-Site Scripting) consiste à injecter du code malveillant, souvent JavaScript, dans une page web afin qu'il soit exécuté par les utilisateurs qui visitent cette page. Dans le contexte de React et JSX, voici un exemple pratique illustrant les différences entre une implémentation sécurisée (par défaut dans JSX) et une vulnérabilité potentielle.

---

### **Exemple d'attaque XSS avec `dangerouslySetInnerHTML`**

Le danger survient lorsque l'on utilise la méthode `dangerouslySetInnerHTML`, qui permet d'insérer du HTML brut sans échapper les caractères spéciaux.

#### Code HTML/JSX

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Exercice React</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>

    <script type="text/babel">
        const userGeneratedContent = "<img src='invalid' onerror='alert(\"XSS Attack!\")' />";
        // Composant vulnérable
        const UnsafeComponent = () => {
            return (
                <div dangerouslySetInnerHTML={{ __html: userGeneratedContent }} />
            );
        };

        const Wrapper = () => {
            return (
                <div>
                    <UnsafeComponent />
                </div>
            );
        };

        ReactDOM.createRoot(document.getElementById('root')).render(
            <Wrapper />
        );
    </script>
</body>
</html>
```

#### Ce qui se passe :
1. Le contenu injecté contient une balise `<img>` avec un événement `onerror`. 
2. Lorsque l'image ne se charge pas (car la source est invalide), le code dans `onerror` est exécuté.
3. Une alerte avec le texte **"XSS Attack!"** s'affiche.

---

### **Solution sécurisée avec JSX (protection contre XSS)**

JSX protège automatiquement les caractères spéciaux. Voici comment afficher le même contenu de manière sécurisée.

#### Code HTML/JSX

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Protection XSS</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Contenu injecté, mais échappé par JSX
        const userGeneratedContent = "<img src='invalid' onerror='alert(\"XSS Attack!\")' />";

        // Composant sécurisé
        const SafeComponent = () => {
            return (
                <div>
                    {userGeneratedContent}
                </div>
            );
        };

        // Rendu dans le DOM
        ReactDOM.createRoot(document.getElementById('root')).render(
            <SafeComponent />
        );
    </script>
</body>
</html>
```

#### Ce qui se passe :
1. React échappe automatiquement les caractères spéciaux du contenu.
2. La balise `<img>` est affichée comme un texte brut et non comme un élément HTML interprété.
3. Aucun code JavaScript n'est exécuté, éliminant le risque d'attaque XSS.

---

### **Conclusion**

| Méthode                      | Comportement                              |
|------------------------------|-------------------------------------------|
| `dangerouslySetInnerHTML`    | HTML brut inséré directement, potentiellement vulnérable. |
| JSX                         | Protège automatiquement en échappant les caractères spéciaux. |

> **Recommandation** : Évitez d'utiliser `dangerouslySetInnerHTML` sauf si absolument nécessaire, et uniquement avec du contenu strictement contrôlé ou validé pour prévenir les attaques XSS.