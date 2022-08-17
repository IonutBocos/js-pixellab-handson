var person = {
  name: 'Bocos',
  surname: 'Ioan',
  age: 29,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested)
  afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
  Poti folosi metoda pentru a converti numerele negative in pozitive. `,
);

var message = `Intre `;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  for (var y = 0; y < person.friends.length; y++) {
    var friendComparation = person.friends[y];
    ageDiff = Math.abs(friend.age - friendComparation.age);
    if (i === y) {
      continue;
    } else {
      message =
        'Intre ' +
        friend.name +
        ' si ' +
        friendComparation.name +
        ' este o diferenta de ' +
        ageDiff +
        ' ani.';

      console.log(message);
    }
  }
}
