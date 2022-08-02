var person = {
  name: 'Bocos',
  surname: 'Ioan',
  age: 29,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: ' Carolson',
      age: 29,
    },
  },
};

Object.keys(person.skills).forEach(function (keyName) {
  if (person.skills[keyName] === true) {
    console.log(`${person.name} cunoaste: ${keyName}.`);
  }
});

Object.keys(person.friends)
  .reverse()
  .forEach(function (keyName) {
    var friend = person.friends[keyName];
    console.log(`${friend.surname} ${friend.name}`);
  });

var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (keyName, index, keys) {
  var friend = person.friends[keyName];
  var punctuation = ', ';

  if (index === keys.length - 1) {
    punctuation = `.`;
  }

  if (index === keys.length - 2) {
    punctuation = ` si `;
  }
  message += `${friend.name}${punctuation}`;
});
console.log(message);

Object.keys(person.friends).forEach(function (keyName) {
  var friend = person.friends[keyName];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${ageDiff} ani.`,
  );
});
