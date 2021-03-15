function writeCards(names, event) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

function countDown(integer) {
  while (integer > -1) {
    console.log(integer);
    integer--;
  }
}