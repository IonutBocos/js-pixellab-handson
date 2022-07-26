var person = {
  name: 'Ioan',
  surname: 'Bocos',
  age: 35,
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
      age: 31,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 29,
    },
    { name: 'Carol', surname: 'Carolson', age: 30 },
  ],
};

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[1];

  console.log(skill);

  if (i % 2 === 0) {
    console.log(skill);
  }
}

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill[0] !== 'j') {
    console.log(person.skills[i]);
  }
}

var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  // v1
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(sumAge.toString());

var curentYear = 2022;
var sumYears = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumYears = curentYear + 2022 - friend.age;
}
console.log(sumYears + '');

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var agediff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}
