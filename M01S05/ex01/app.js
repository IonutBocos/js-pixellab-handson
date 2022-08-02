// console.log(
//   `${hours}:${minutes}:${seconds}:${milisceconds}`,
//   'Am ajuns la Pixellab.',
// );

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milisceconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milisceconds} am ajuns la Pixellab`;
}

setInterval(function () {
  console.log(getTime());
}, 1000);
