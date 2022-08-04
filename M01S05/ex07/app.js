const dateBuilder = [
  function () {
    return '2022';
  },

  function () {
    return 'August';
  },
  () => {
    return '3';
  },
];

dateBuilder[3] = function () {
  return 'Miercuri';
};

// ...

console.log(dateBuilder[1]());
// ...

console.log(`Suntem in anul ${dateBuilder[0]()}.`);
//

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);
//

console.log(`Astazi este ${dateBuilder[1]()}.`);
