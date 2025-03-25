import {foo} from './utils';

function add(a: number, b: number, info: string): number {
    return a + b;
  }
  
  const result: number = add(3, 5, "addition");

  console.log(result);

  foo();

  let num: number[] = [1, 2, 3, 4];

  function sum(num :number[]): number{

    return 1;
  }

  // typage de tuple
let person: [string, number] = ["John", 30];

let value: any = "Hello";
value = 42; // Pas d'erreur, mais perd les avantages du typage

function sayHello(name: string, age?: number): void {
  if (age) {
    console.log(`Bonjour, ${name}! Tu as ${age} ans.`);
  } else {
    console.log(`Bonjour, ${name}!`);
  }
}

sayHello('Alan');
sayHello('Sophie', 22);

// typage avec des objets ou interfaces

class Person {
  name: string;
  age: number;
  address?: string; // Propriété optionnelle
}

let user: Person = {
  name: "Alice",
  age: 28,
};

function setPerson(p : Person){
  console.log(p)
}

const p =  new Person;

p.name = "Alan";
p.age = 22;

setPerson(p);

// type simple
type ID = number;
type Username = string;
type Status = "active" | "inactive";

// type complexe
type User = {
    id: ID;
    username: Username;
    status: Status;
};

const u : User = {
  id : 2,
  username : "Alan",
  status : "active"
}

// typage générique nous allons le voir plus loin
type Pair<T> = [T, T];

const pp : Pair<Person> = [new Person, new Person];

const qq : Pair<number> = [1, 2];

// syntaxe pour définir des fonctions avec des typages génériques 
function merge<T>(a : T, b : T): T[]{
    const res : T[] = [];
    res.push(a);
    res.push(b);

    return res; 
}

//on fixe le typage à l'appelle de la fonction
console.log( merge<string>("1", "2"));
console.log( merge<number>(1, 2));

const p1 = new Person
p1.name = "Albert";

const p2 = new Person
p2.name = "Alice";
console.log( merge<Person>(p1, p2));