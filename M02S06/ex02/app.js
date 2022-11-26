const arguments = process.argv;

const [, , ...restOfArguments] = arguments;

const side = restOfArguments[0];
console.log(`Suprafata patratului este ${side ** 2}`);
