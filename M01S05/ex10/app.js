function calculateSurface(width, lenth) {
  if (arguments.length === 2) {
    return width * lenth;
  } else {
    return width ** 2;
  }
}

console.warn(
  `Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface()
  care sa primeasca un singur parametru si sa calculeze suprafata unui patrat.`,
);

function calculateSquareSurface(width) {
  calculateSurface(width);
}

//
console.log(calculateSurface(4));
