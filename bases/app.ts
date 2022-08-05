// const msg = "Hola mundo";

// let msg2 = "hola mundo";
// msg2 = "kilo";
// // msg2 = 2; // no es string

// const msg3: string = "Hola mundo!!!";

// const hero = {
//   name: "Ironman",
//   age: 45,
// };
// //hero.age = "50"; //i get error
// hero.age = 50;
// console.log(hero.age + 1);

// const a = 10;
// const a: number = 10;
// let b: number = 10;

function sayHello(msg: string) {
  console.log(msg + " " + "Fernando");
}

(() => {
  const a: number = 10;
  console.log(a);
})();
