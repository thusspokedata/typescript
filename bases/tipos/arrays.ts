(() => {
  const number: (string | number | boolean)[] = [
    1,
    2,
    3,
    4,
    "12",
    5,
    6,
    7,
    8,
    9,
    10,
  ];
  const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const villans = ["Omega Rojo", "Durmammu", "Duende Verde"];
  villans.forEach((v) => console.log(v.toUpperCase()));
  number.push(true);
  console.log(number);
})();
