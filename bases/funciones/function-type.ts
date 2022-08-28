(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => "el mundo esta salvado";

  let myFunction: (y: string) => string;
  //!   let myFunction;
  //!   myFunction = 10;
  console.log(myFunction);

  //   myFunction = addNumbers;
  //   console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction("Fernando"));
  console.log(myFunction(saveTheWorld()));
})();
