"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos Salvamos");
    }
    avengers = 123;
    avengers = Number("55A"); // NaN
    console.log({ avengers });
})();
