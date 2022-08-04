const calculateRectangleArea = function (width, height) {
  return width * height;
};

const yield = 25;
const field1Yield = yield * calculateRectangleArea(100, 250);
const field2Yield = yield * calculateRectangleArea(350, 200);

console.log(field2Yield - field1Yield);
// ...

const beerYield = 2.5 / 10;
const field3Yield = yield * calculateRectangleArea(400, 370);

console.log(beerYield * field3Yield);
