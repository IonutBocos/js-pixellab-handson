var number = prompt('Introdu un numar');

// Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.
var limitNumber = prompt('Introdu limita superioara a buclei');

for (var i = 0; i <= limitNumber; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }
  console.log(`Acest numar este multimplu de ${number}.`);
}
