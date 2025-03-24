let a = 1;

function calcul() {
  // let a = 2 + a;// ReferenceError: Cannot access 'a' before initialization
  a = 2 + a;
  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();