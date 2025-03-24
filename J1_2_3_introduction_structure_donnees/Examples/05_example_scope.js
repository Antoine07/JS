function foo() {
    let a = 10;
    console.log(a); // affiche 10
}

foo();

try {
    console.log(a);

} catch (e) {
    console.log("ref error")
}

console.log('----------------');

let b = 1 ;

function bar(){
    console.log(b);
}

console.log(bar());

// bloc courant pour b
let d = 11;

function baz() {
  // bloc courant pour c
  let c = 9;
  let d = 9;

  // JS ne trouve pas b dans le bloc courant => il remonte les scopes
  console.log(d, c);
}

// affiche 11 9
baz();
console.log(d); // que vaut d 
// console.log(c); // reference error

let h = 10;
function dim(){
    function bar(){
        function baz(){
            console.log(h);
        }
        baz();
    }
    bar();
}

dim();