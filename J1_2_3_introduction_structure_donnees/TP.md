# Exercice permuter

En une ligne permuter les valeurs suivantes

```js
let a = 1;
let b = 2;
let c = 3;

[a, b, c] = [c, a, b];
```

# Exercice Parser

Créez une fonction constructeur ( this à l'intérieur ) Parser qui permettra de parser une chaîne de caractères en fonction d'un motif donné. Voyez l’exemple de l'utilisation de cette fonction constructeur ci-dessous avant d'implémenter le code. Gardez les digits uniquement ainsi que les nombres dans la chaîne de caractères.

```js
const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007
```

# Exercice Max

Ecrire un script pour déterminer le maximun de trois variables distinctes a, b et c
