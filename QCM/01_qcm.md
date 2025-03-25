## QCM : Rappel des fondamentaux en JavaScript

### 1. Qui est l’auteur de JavaScript ?  
☐ Douglas Crockford  
X Brendan Eich  
☐ Tim Berners-Lee  
☐ Guido van Rossum  

---

### 2. En quelle année la première version de JavaScript a-t-elle été créée ?  
☐ 1993  
X 1995  
☐ 2000  
☐ 2015  

---

### 3. JavaScript est un langage...  
☐ Compilé  
X Interprété  (parsing compilation exécution)
X Faiblement typé  
☐ Fortement typé  

---

### 4. Quel est le standard sur lequel repose JavaScript ?  
☐ W3C  
X ECMAScript  
☐ ISO/IEC 14882  
☐ ANSI C  

---

### 5. Quelle est la dernière version officielle d’ECMAScript mentionnée dans le cours ?  
X ES6  
X ES2015  
X ES2020  
☐ ES2022  

---

### 6. Que signifie "typage dynamique" en JavaScript ?  
X Les types des variables sont définis à l'assignation 
☐ Les types des variables doivent être déclarés explicitement  
☐ Les variables ne peuvent pas changer de type après assignation  
☐ Les variables n’ont pas de type  

---

### 7. Quel sera le type de la variable après ces instructions ?  
```js
let n = 10;
n = "Hello";
```  
☐ number  
X string  
☐ undefined  
☐ boolean  

---

### 8. Quelle valeur ne fait **pas** partie des types primitifs en JavaScript ?  
☐ boolean  
X object  
☐ number  
☐ string  

---

### 9. Quel est le type de la variable `username` ici ?  
```js
let username;
console.log(typeof username);
```  
☐ null  
X undefined  
☐ string  
☐ object  

---

### 10. Que retournera l’exécution de ce code ?  
```js
const x = 2n ** 100n;
console.log(x);
```  
☐ Une erreur  
X Un nombre très grand  
☐ Un nombre en notation scientifique  
☐ Une chaîne de caractères  

---

### 11. Les objets en JavaScript sont...  
X Mutables  
☐ Immuables  
☐ Toujours des instances de classes  
☐ Toujours déclarés avec `const`  

---

### 12. Quelle structure de données garantit l’unicité des éléments en JavaScript ?  
☐ Array  
☐ Object  
☐ Map  
X Set  

---

### 13. Quels éléments sont évalués comme **faux** en JavaScript ?  
X 0  
X "" (chaîne vide)  
☐ "false"  
X NaN  

---

### 14. Que retournera cet opérateur logique ?  
```js
false && "Hello"
```  
☐ "Hello"  
X false  la chaîne de caractères n'est pas évaluée
☐ undefined  
☐ NaN  

---

### 15. Quelle sera la sortie du code suivant ?  
```js
let a = 10;
let b = 20;
console.log(`Somme : ${a + b}`);
```  
X Somme : 30  
☐ "Somme : 30"  
☐ Erreur  
☐ Somme : a + b  

---

### 16. Que retournera ce code ?  
```js
console.log( true ? 'yes' : 'no' );
```  
X yes  
☐ no  
☐ true  
☐ Erreur  

---

### 17. Quelle est la portée d'une variable définie avec `let` dans une fonction ?  
☐ Globale  
X Limitée au bloc dans lequel elle est déclarée  
☐ Limitée à l'objet `window` ou `Object`
☐ Limitée au fichier JS  

```js

function foo(){
  let a = 1 ;
}

foo();
console.log(a); // Uncaught ReferenceError: a is not defined
```
---

### 18. Que se passe-t-il lorsque JavaScript ne trouve pas une variable dans le scope courant ?  
☐ Une erreur est levée immédiatement  
X JavaScript remonte les scopes pour chercher la variable  
☐ JavaScript assigne `undefined` à la variable  
☐ JavaScript crée automatiquement la variable  

---

### 19. Pourquoi le code suivant provoque-t-il une erreur ?  
```js
function tdz() {
  console.log(tdz_val);
  let tdz_val = "Temporal Dead Zone";
}
tdz();
```  
☐ `tdz_val` est mal orthographié  
X `tdz_val` est dans la "Temporal Dead Zone"   // Uncaught ReferenceError: Cannot access 'tdz_val' before initialization
☐ `tdz_val` n'est pas déclaré  
☐ `let` n'autorise pas l'affectation de valeurs  

---

### 20. Quel sera l'affichage du code suivant ?  
```js
let i = 100;
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
```  
X 0, 1, 2, 100  
☐ 100, 0, 1, 2  
☐ 0, 1, 2, 3  
☐ Erreur  

---
