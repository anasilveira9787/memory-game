
let cardList = [1, 2, 3, 4, 5, 6];
let cards = document.querySelectorAll('.card');

let currentRandomIndexes = [];
let card1 = 0;
let card2 = 0;

function getRandomCardIndexes() {
  const randomIndex = Math.floor(Math.random() * cardList.length);
  const hasIndexPair = currentRandomIndexes.filter((index) => index === randomIndex).length >= 2;

  if (hasIndexPair) {
    return getRandomCardIndexes();
  }

  currentRandomIndexes.push(randomIndex);

  return randomIndex;
}

function setCards() {
  cards.forEach((card) => {
    const randomIndex = getRandomCardIndexes();
    card.innerText = cardList[randomIndex];
  });
}

setCards();

console.log("cardList" + cardList);
console.log("cards" + cards);

cards.forEach(card => {
  card.addEventListener('click', () => compareCards(card));
});

function compareCards(card) {
  if (card.classList.contains("isSameContent")){
      return
  }
   const content = card;
  if (card1 === 0) {
      card1 = content;
      card1.classList.add("isSameContent");
  } else if (card2 === 0) {
     card2 = content;
     card2.classList.add("isSameContent");
  (card1.innerText === card2.innerText) ? 
  matchThis(card1,card2) :  
  cleanThis(card1,card2);  
  
  } 
   
}

function matchThis(a, b) {
  console.log("It's a Match" + a.innerText, b.innerText);
  card1 = 0;
  card2 = 0;
}

function cleanThis(a, b) {
  card1 = 0;
  card2 = 0;
  console.log("Not Now" + a.innerText, b.innerText);

  setTimeout(() => {  
    b.classList.remove("isSameContent");
    a.classList.remove("isSameContent");
}, 500);
}