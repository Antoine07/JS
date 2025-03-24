function tdz() {
    // console.log(tdz_val); // reference error 
  
    let tdz_val = "Temporal Dead Zone";
  }
  
  tdz();

  function t() {
    console.log(tdz_val);
  
    var tdz_val = "Temporal Dead Zone";
  }
  
  t();