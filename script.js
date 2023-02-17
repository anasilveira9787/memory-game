
let cardList = ['1','2','3','4','5','6','1','2','3','4','5','6']
let cards = document.querySelectorAll('.card')

let card1 = 0
let card2 = 0


function setCards() {  

    for (var i = 0; i < cards.length; i++) {
        const randomNumber = Math.floor(Math.random() * cardList.length);
        cards[i].innerText = cardList[randomNumber];
        cardList = cardList.splice(randomNumber, 1)
        // more statements
     }

}


setCards()

console.log("cardList" + cardList);
console.log("cards" + cards);



cards.forEach(card => {
    card.addEventListener('click', () => compareCards(card))    
});

function compareCards(card) {
    if (card.classList.contains("isSameContent")){
        return
    }
     const content = card;
    if (card1 === 0) {
        card1 = content;
        content.classList.add("isSameContent");
    } else if (card2 === 0) {
       card2 = content;
       content.classList.add("isSameContent");
    (card1.innerText === card2.innerText) ? matchThis(card1,card2) : cleanThis(card1,card2) 
    
    } 
     
}


function matchThis(a, b) {    
    console.log("It's a Match"+ a.innerText, b.innerText)
    card1 = 0
    card2 = 0
}

function cleanThis(a, b) {
    a.classList.remove("isSameContent");
    b.classList.remove("isSameContent");
    card1 = 0
    card2 = 0    
    console.log("Not Now" + a.innerText, b.innerText)
}