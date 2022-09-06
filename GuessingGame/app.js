document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  const inputValue = document.getElementById('value').value;
  if (!inputValue) {
    return;
  }

  const randomNumber = randdomNumberGenerator();
  if (inputValue === randomNumber) {
    document.getElementById('result').innerText =
      'You guessed the number right.';
  } else {
    document.getElementById('result').innerText =
      'You guessed the number wrong. Actual number is ' + randomNumber;

    if (inputValue + 10 > randomNumber) {
      document.getElementById('message').innerText =
        'You where near but a little higher.';
    } else if (inputValue - 10 > randomNumber) {
      document.getElementById('message').innerText =
        'You where near but a little lower';
    }
  }
};

const randdomNumberGenerator = () => {
  const number = Math.floor(Math.random() * 100 + 1);

  return number;
};
