"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    //   isSuperman = true && false;
    //   isSuperman = isBatman ? "ABC" : "CDE";
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
