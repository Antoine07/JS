## QCM : Rappel des fondamentaux en JavaScript

### 1. Qui est l’auteur de JavaScript ?  
☐ Douglas Crockford  
☐ Brendan Eich  
☐ Tim Berners-Lee  
☐ Guido van Rossum  

✅ **Réponse :** Brendan Eich  

---

### 2. En quelle année la première version de JavaScript a-t-elle été créée ?  
☐ 1993  
☐ 1995  
☐ 2000  
☐ 2015  

✅ **Réponse :** 1995  

---

### 3. JavaScript est un langage...  
☐ Compilé  
☐ Interprété  
☐ Faiblement typé  
☐ Fortement typé  

✅ **Réponses :** Interprété, Faiblement typé  

---

### 4. Quel est le standard sur lequel repose JavaScript ?  
☐ W3C  
☐ ECMAScript  
☐ ISO/IEC 14882  
☐ ANSI C  

✅ **Réponse :** ECMAScript  

---

### 5. Quelle est la dernière version officielle d’ECMAScript mentionnée dans le cours ?  
☐ ES6  
☐ ES2015  
☐ ES2020  
☐ ES2022  

✅ **Réponse :** ES2020  

---

### 6. Que signifie "typage dynamique" en JavaScript ?  
☐ Les types des variables sont définis à l'exécution  
☐ Les types des variables doivent être déclarés explicitement  
☐ Les variables ne peuvent pas changer de type après assignation  
☐ Les variables n’ont pas de type  

✅ **Réponse :** Les types des variables sont définis à l'exécution  

---

### 7. Quel sera le type de la variable après ces instructions ?  
```js
let n = 10;
n = "Hello";
```  
☐ number  
☐ string  
☐ undefined  
☐ boolean  

✅ **Réponse :** string  

---

### 8. Quelle valeur ne fait **pas** partie des types primitifs en JavaScript ?  
☐ boolean  
☐ object  
☐ number  
☐ string  

✅ **Réponse :** object  

---

### 9. Quel est le type de la variable `username` ici ?  
```js
let username;
console.log(typeof username);
```  
☐ null  
☐ undefined  
☐ string  
☐ object  

✅ **Réponse :** undefined  

---

### 10. Que retournera l’exécution de ce code ?  
```js
const x = 2n ** 100n;
console.log(x);
```  
☐ Une erreur  
☐ Un nombre très grand  
☐ Un nombre en notation scientifique  
☐ Une chaîne de caractères  

✅ **Réponse :** Un nombre très grand (BigInt)  

---

### 11. Les objets en JavaScript sont...  
☐ Mutables  
☐ Immuables  
☐ Toujours des instances de classes  
☐ Toujours déclarés avec `const`  

✅ **Réponse :** Mutables  

---

### 12. Quelle structure de données garantit l’unicité des éléments en JavaScript ?  
☐ Array  
☐ Object  
☐ Map  
☐ Set  

✅ **Réponse :** Set  

---

### 13. Quels éléments sont évalués comme **faux** en JavaScript ?  
☐ 0  
☐ "" (chaîne vide)  
☐ "false"  
☐ NaN  

✅ **Réponses :** 0, "", NaN  

---

### 14. Que retournera cet opérateur logique ?  
```js
false && "Hello"
```  
☐ "Hello"  
☐ false  
☐ undefined  
☐ NaN  

✅ **Réponse :** false  

---

### 15. Quelle sera la sortie du code suivant ?  
```js
let a = 10;
let b = 20;
console.log(`Somme : ${a + b}`);
```  
☐ Somme : 30  
☐ "Somme : 30"  
☐ Erreur  
☐ Somme : a + b  

✅ **Réponse :** Somme : 30  

---

### 16. Que retournera ce code ?  
```js
console.log( true ? 'yes' : 'no' );
```  
☐ yes  
☐ no  
☐ true  
☐ Erreur  

✅ **Réponse :** yes  

---

### 17. Quelle est la portée d'une variable définie avec `let` dans une fonction ?  
☐ Globale  
☐ Limitée au bloc dans lequel elle est déclarée  
☐ Limitée à l'objet `window`  
☐ Limitée au fichier JS  

✅ **Réponse :** Limitée au bloc dans lequel elle est déclarée  

---

### 18. Que se passe-t-il lorsque JavaScript ne trouve pas une variable dans le scope courant ?  
☐ Une erreur est levée immédiatement  
☐ JavaScript remonte les scopes pour chercher la variable  
☐ JavaScript assigne `undefined` à la variable  
☐ JavaScript crée automatiquement la variable  

✅ **Réponse :** JavaScript remonte les scopes pour chercher la variable  

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
☐ `tdz_val` est dans la "Temporal Dead Zone"  
☐ `tdz_val` n'est pas déclaré  
☐ `let` n'autorise pas l'affectation de valeurs  

✅ **Réponse :** `tdz_val` est dans la "Temporal Dead Zone"  

---

### 20. Quel sera l'affichage du code suivant ?  
```js
let i = 100;
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
```  
☐ 0, 1, 2, 100  
☐ 100, 0, 1, 2  
☐ 0, 1, 2, 3  
☐ Erreur  

✅ **Réponse :** 0, 1, 2, 100  

---
