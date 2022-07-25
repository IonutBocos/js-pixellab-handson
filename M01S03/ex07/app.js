var person = {
  firstName: 'Bocos',
  lastName: 'Ioan',
  email: 'ioanbocos@yahoo.com',
  birthYear: 1993,
  pets: [
    {
      name: 'Miguel',
      species: 'cat',
      age: 2,
    },
    {
      name: 'Rex',
      species: 'dog',
      age: 1,
    },
    {
      name: 'Apolodor',
      species: 'pinguin',
      age: 3,
    },
  ],
  zipCode: '407550',
};

var tema = `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.
Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.
Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
`;

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

var tema2 = `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`;

console.log((2022 - person.pets[2].age).toString());

var year = 2022;
var difference = year - person.birthYear - person.pets[0].age;
console.log(difference.toString());

var petName = person.pets[0].name;
console.log(petName);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

var temaUl = `Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person.
Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
`;

var li01 = document.getElementById('prop01');
li01.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ', ' +
  'locuiesc toti in aceasi casa.';

var li02 = document.getElementById('prop02');
li02.innerText = person.pets[0].age - person.pets[2].age;

var temaLi = `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.
Folosirea variabilelor este optionala dar incurajata.
`;
var li03 = document.getElementById('prop03');

li03.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', ' +
  'm-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode +
  '.';

var li04 = document.getElementById('prop04');
li04.innerText =
  'Animalele mele s-au nascut in ' +
  (2022 - person.pets[0].age) +
  ', ' +
  (2022 - person.pets[1].age) +
  ', respectiv ' +
  (2022 - person.pets[2].age) +
  '.';
