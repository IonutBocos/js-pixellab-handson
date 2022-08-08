const person = {
  getName: function () {
    return 'Bocos Ioan';
  },

  getAge: function () {
    return 29;
  },
};

console.log(person.getName().split(' ')[0]);
// ...

const curentYear = new Date().getFullYear();
const birthYear = curentYear - person.getAge();
console.log(birthYear);
//

console.log(`'${birthYear.toString().slice(-2)}`);
//

console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(person.getName());

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);
console.log(person.getAge());

console.warn(
  `Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);
console.log(`M-am nascut in ${birthYear}.`);

console.warn(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${birthYear}!`,
);
