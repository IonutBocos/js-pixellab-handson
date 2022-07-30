// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     i++; // <- important

//     break;
//   }

//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 67.
// var i = 1;

// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// var i = 1;
// while (i <= 66) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).

// var i = 0;

// while (i < 100) {
//   if (i > 12) {
//     i++;

//     break;
//   }
//   console.log(i);

//   i++;
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
// var i = 1;

// while (i <= 32) {
//   if (i % 2 !== 0) {
//     i++;

//     continue;
//   }

//   console.log(i);

//   i++;
// }

// Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.

var minimNumber = prompt('Introdu un numar minim');
var maximNumber = prompt('Introdu o limita maxima');

while (minimNumber <= maximNumber) {
  if (minimNumber % 5 !== 0) {
    minimNumber++;

    continue;
  }
  console.log(minimNumber);

  minimNumber++;
}
