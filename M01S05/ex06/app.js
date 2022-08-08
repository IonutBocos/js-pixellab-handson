const person = {
  getName: function () {
    return 'Bocos Ioan';
  },

  getAge: function () {
    return 29;
  },
};

// forced exemple

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.log(accessor('Name'));
// .....

const firstName = accessor('Name');
console.log(`Eu sunt ${firstName}.`);
// .....

const curentYear = new Date().getFullYear();
const birthYear = curentYear - accessor('Age');
console.log(birthYear.toString());
// ...

console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”`,
);
console.log(`M-am nascut in ${birthYear}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani!`);
