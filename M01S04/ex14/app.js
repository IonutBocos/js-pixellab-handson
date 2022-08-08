var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

var sumAge = 0;
for (i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];

  sumAge = sumAge + pet.age;
}
console.log(sumAge);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
  `,
);

var message = '';
var sumAge = 0;
var curentYear = 2022;
for (i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  sumAge = curentYear - person.birthYear - pet.age;

  message = `Intre ${person.firstName} si ${pet.name} este o diferenta de ${sumAge} ani.`;
  console.log(message.toString());
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);
var message = ``;
for (i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];

  message = `Animalul meu se numeste ${pet.name}`;
  console.log(message);
}

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am,
   dar intre noi este o diferenta de xx ani.” `,
);

var maxAge = 0;
curentYear = 2022;
ageDiff = 0;
var message = '';
for (i = 0; i < person.pets.length; i++) {
  if (person.pets[i].age > maxAge) {
    maxAge = person.pets[i].age;
    ageDiff = curentYear - person.birthYear - maxAge;
    maxAgeName = person.pets[i].name;
    message = `${maxAgeName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`;
  }
}
console.log(message);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
var message = 'Am ';
person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';

  if (index === pets.length - 2) {
    punctuation = ' si ';
  }

  if (index === pets.length - 1) {
    punctuation = '.';
  }

  message += pet.species + punctuation;
});
console.log(message);
