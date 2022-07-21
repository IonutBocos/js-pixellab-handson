// var object = {
//   name: 'Bocos',
//   surname: 'Ioan',
//   age: 29,
//   petOwner: false,
//   carOwner: true,
// };

// console.warn(
//   `Afiseaza fraza “Ma numesc xxx yyy si am xx ani.”
//   in consola folosind operatorul de concatenare`,
// );

// console.log(
//   'Ma numesc ' +
//     object.name +
//     ' ' +
//     object.surname +
//     ' si am ' +
//     object.age +
//     ' ' +
//     'ani.',
// );

// console.warn(
//   `Afiseaza anul in care te-ai nascut scazand varsta pe
//   care ai trecut-o in obiect din anul curent
//   (un proces numit hardcodare)`,
// );

// console.log((2022 - object.age).toString());

// console.warn(`
// Afiseaza fraza “xxx yyy are xx ani.” in consola folosind
// operatorul de concatenare
// `);

// console.log(
//   object.name + ' ' + object.surname + ' ' + 'are ' + object.age + ' ani.',
// );

// console.warn(
//   `Afiseaza fraza "xxx s-a nascut in aaaa.”
//   Foloseste tot anul curent pentru a scadea varsta.`,
// );

// console.log(
//   object.name + ' ' + 's-a nascut in' + ' ' + (2022 - object.age) + '.',
// );

// console.warn(
//   `
//   Adauga o cheie noua de tip boolean cu numele
//   carOwner (observa capitalizarea)
//   `,
// );

// let user = {
//   name: 'cristal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac & chese rules', '10 things to make width marmite'],
//   login: function () {
//     console.log('the user logged in');
//   },
//   logout: function () {
//     console.log('the user logged out');
//   },
//   logBlogs: function () {
//     // console.log(this.blogs);
//     console.log('this user has written the follwing blogs');
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// user.login();
// user.logout();
// user.logBlogs();
// console.log(this);

// console.log(user);
// console.log(user.name);

// // user.age = 35;

// console.log(user['name']);
// user['name'] = 'chun-li';
// console.log(user['name']);

console.log(Math);

const random = Math.random();
console.log(random);

// var radius = 3;
// var pi = 3;

// console.log(radius ** pi);

// console.log(radius % 3);
// console.log(10 / 2);

// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// var result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span> This blog has ${likes} likes</span>
// `;

// console.log(html);

// // Array

// var ninjas = ['shaun', 'ryu', 'chun-li'];
// console.log(ninjas[1]);

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// var ages = [20, 25, 30, 35];
// console.log(ages[2]);

// var random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// // array methods

// var result = ninjas.join(',');
// console.log(result);

// var result = ninjas.indexOf('chun-li');
// console.log(result);

// var result = ninjas.concat(['ken', 'crystal']);
// console.log(result);

// var result = ninjas.push(['ken']);
// console.log(result);

// result = ninjas.pop();
// console.log(result);

// // Boolean
// var email = 'luigi@tehnetninja.co.uk';
// var names = ['mario', 'luigi', 'toad'];

// foor loops

// for (var i = 0; i < 5; i++) {
//   console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let i = 0;
// while (i < 5) {
//   console.log('in loop: ', i);
//   i++;
// }

// // while do

// let i = 0;
// do {
//   console.log('in loop: ', i);
//   i++;
// } while (i < 5);

// var password = 'password';

// if (password.length >= 12) {
//   console.log('this password is long enough');
// } else if (password.length >= 8) {
//   console.log('this password is good');
// } else {
//   console.log('this password is not long enough');
// }

// switch statements

// const grade = 'D'; //proprietatile trebuie sa fie la fel deoarece se verifica cu === string || number

// switch (grade) {
//   case 'A':
//     console.log('you got an A!');
//   case 'B':
//     console.log('you got an B!');
//   case 'C':
//     console.log('you got an C!');
//   case 'D':
//     console.log('you got an D!');
//   case 'E':
//     console.log('you got an E!');
//   case 'F':
//     console.log('you got an F!');
//   default:
//     console.log('not a valid grade');
// }

// variables & block scope
// let age = 30;
// // daca incerc sa redefinesc variabila o sa dea eroare/ daca doar ii modific valoarea  o sa se defineasca

// if (true) {
//   // putem redefinii o variabila in interiorul blocului dar nu se v-a aplica si in afara lui
//   let age = 40;
//   let name = 'shaun';
//   let surname = 'steven';
//   console.log('inside code block', age, name, surname);
// }

// console.log('outside code block', age);

// functii si argumente---------

// // const speak = function (name) {
//   console.log(`good day! ${name}`);
// };

// speak('mario');
// speak('ioan');

// const speak = function (name, time) {
//   console.log(`good ${time} ${name} `);
// };

// speak('mario', 'morning');

// const speak = function (name = 'luigi', time = 'night') {
//   console.log(`good ${time} ${name} `);
// };
// speak();
// speak('ioan');

// return values -------------------
// const calcArea = function (radius) {
//   let area = Math.PI * radius ** 2;
//   return area;
// };

// const area = calcArea(5);
// console.log(area);

// arrow functions------------------
// const great = () => 'hello world';

// const result = great();
// console.log(result);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30], 0.2));

//

// const namee = 'shaun';

// const great = () => 'hello';

// let resultOne = great();
// console.log(resultOne);

// let resultTwo = namee.toUpperCase();
// console.log(resultTwo);

// var color = 'black';

// let paint = color.toUpperCase();
// console.log(paint);
