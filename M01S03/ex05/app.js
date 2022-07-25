var person = {
  name: 'Ioan',
  surname: 'Bocos',
  age: 29,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 30,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 30,
    },
  ],
};
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

var temaFrumoasa = `Afiseaza propozitia: “Ma numesc xxx yyy si vreau sa invat javascript.” Foloseste notatia cu paranteze patrate.
Afiseaza propozitia “Sunt xxx si stiu HTML si CSS.”. Nu folosi valoarea din arrayul de skills.
Afiseaza propozitia “Am x prieteni: Larryson, Stevenson si Carolson.”. Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.
Afiseaza propozitia “Numele meu este xxx yyy, am zz ani si n prieteni.”. Foloseste metoda length pentru a calcula lungimea arrayului de prieteni.
`;

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.log('Sunt ' + person.name + ' si stiu HTML si CSS.');

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ' si ' +
    person.friends[2].surname +
    '.',
);

console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ', ' +
    'am ' +
    person.age +
    ' ani si ' +
    person.friends.length +
    ' prieteni.',
);
