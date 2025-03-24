const PRECISION = 100;

function ttc(price, tva = .2) {
    [price, tva] = [parseFloat(price), parseFloat(tva)];

    // error first 
    if (isNaN(price) || isNaN(tva)) {
        throw new Error('Error type');
    }

    return Math.floor(price * (1 + tva) * PRECISION) / PRECISION;
}

try {
    console.log(ttc(100));
    console.log(ttc("100"));
    console.log(ttc("100", ".18"));
    console.log(ttc("bonjour", ".18"));
} catch (e) {
    console.log("error type")
}