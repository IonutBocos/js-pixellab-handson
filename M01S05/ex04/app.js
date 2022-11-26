const calculateRectangleArea = (width, height) => {
  return width * height;
};

const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(1.5, 2.2);
const windowSurface = calculateRectangleArea(2, 1.5);
const requiredSurface = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este: ${requiredSurface} metri patrati.`);
// ...
console.warn(
  `Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
  O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.`,
);

const calculateSquareArea = (length) => {
  return calculateRectangleArea(length, length);
};

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().
Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
`);
const aggregateSurfaceArea = (width, length) => {
  return calculateRectangleArea(width, length);
};
const firstArea = aggregateSurfaceArea(48, 92);
const secondArea = calculateRectangleArea(51, 102);

console.log(firstArea + secondArea);
