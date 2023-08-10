let firstCard = getrandomcard();
let secondCard = getrandomcard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getrandomcard(){
  let randomNumber= Math.floor(Math.random()*13+1);
  if(randomNumber === 1)
  return 11;
  else if(randomNumber > 10)
  return 10;
  else
  return randomNumber;
}


function startGame(){
  renderGame();
}

function renderGame()
{
cardsEl.textContent = "Cards: ";
for(let i=0; i<cards.length; i++){
  cardsEl.textContent += cards[i]+" ";

}
sumEl.textContent= "Sum is: " +sum;
if(sum <= 20){
message= "draw a new card? ";
}
else if(sum === 21){
    message= "woohoo! blackjack";
    hasBlackJack=true;
}
else {
  message= "oops!out of game";
    isAlive = false;
}   
messageEl.textContent= message;
}

function newCard()
{
  let c= getrandomcard();
  cards.push(c);
  sum += c;
  startGame();

}

