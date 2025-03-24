let i = 100;

for ( let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);

// ReferenceError
for (let j = 0; j < 10; j++) {}
console.log(j);