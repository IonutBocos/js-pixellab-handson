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
      name: 'Steve',
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

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendsCount = friends.length;

  if (index === friendsCount - 1) {
    punctuation = '.';
  }

  // if (index === friendsCount - 2) {
  //   punctuation = ' si ';
  // }

  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

var totalAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    totalAge += friend.age;
  }
});
console.log(totalAge.toString());

var totalYears = 0;
var curentYear = 2022;
person.friends.forEach(function (friend) {
  var birthYear = curentYear - friend.age;

  if (friend.age % 2 !== 0) {
    totalYears += birthYear;
  }
});
console.log(totalYears.toString());

person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

person.skills.reverse().forEach(function (skill) {
  console.log(skill);
});
