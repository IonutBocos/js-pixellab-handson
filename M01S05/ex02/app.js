function calculateRectangleArea(width, height) {
  return width * height;
}

console.log(calculateRectangleArea(4, 3));

console.log(calculateRectangleArea(5, 3), calculateRectangleArea(3, 2));

const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);
