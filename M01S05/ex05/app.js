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
