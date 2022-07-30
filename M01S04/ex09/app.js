// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 100);

// var i = 1;

// do {
//   if (i > 50) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 52

// var i = 1;

// do {
//   if (i > 52) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.

// var i = 1;

// do {
//   if (i > 51) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)

// var i = 1;

// do {
//   if (i > 12) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32

// var i = 8;

// do {
//   if (i % 2 === 0) {
//     i++;

//     continue;
//   }
//   console.log(i);

//   i++;
// } while (i <= 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar,
//  o limita inferioara si o limita superioara apoi afiseaza toti multiplii
// de numar intre limita inferioara si limita superioara introduse.

var multipleNumber = prompt(
  'Introdu un numar a carui multiplii doresti sa-i afisez.',
);
var inferiorNumber = prompt('Introdu limita inferioara.');
var superiorNumber = prompt('Introdu limita superioara.');

do {
  if (inferiorNumber % multipleNumber !== 0) {
    inferiorNumber++;

    continue;
  }
  console.log(inferiorNumber);

  inferiorNumber++;
} while (inferiorNumber <= superiorNumber);
