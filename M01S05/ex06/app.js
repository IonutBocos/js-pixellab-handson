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
  )} ani si m-am nascut in anul ${birthYear}. `,
);
// nu e verde
