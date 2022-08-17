const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const h1Element = document.createElement('h1');
const h2Element = document.createElement('h2');
let message = 'Nu stim ce browser folosesti.';
let explorerMessage = '';
let userName = '';
let messageToUser = '';

if (userAgentString.includes('Chrome')) {
  message = 'Navighezi folosind Chrome.';
}
paragraphElement.innerText = message;

document.body.append(paragraphElement);

// Folosind metoda window.setTimeout() afiseaza dupa 3 secunde un prompt cu mesajul: “nume browser vrea sa stie cum te cheama”.
// Cu rezultatul metodei prompt afiseaza un element h1 cu mesajul: “Salut nume utilizator!”.

setTimeout(function () {
  if (userAgentString.includes('Chrome')) {
    let nameBrowser = 'Chrome';
    userName = prompt(`${nameBrowser} vrea sa stie cum te cheama?`);

    if (userName.length > 0) {
      messageToUser = `Salut ${userName}!`;
    }
    h1Element.innerText = messageToUser;
    document.body.append(h1Element);
  }
}, 3000);

// Adauga mesaj pentru pentru Internet Explorer.
// Converteste codul rezultat la o instructiune de tip switch.
// Dupa ce apare elementul h1, asteapta inca 3 secunde si elimina paragraful initial din DOM folosind metoda .remove()

if (userAgentString.includes('Internet Explorer')) {
  explorerMessage = 'Navighezi folosind Internet Explorer';
}
h2Element.innerText = explorerMessage;
document.body.append(h2Element);

const browser = userAgentString;
switch (browser) {
  case 'Chrome':
    message = 'Navighezi folosind Chrome.';
    paragraphElement.innerText = message;
    document.body.append(paragraphElement);
}
