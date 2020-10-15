import Game from "./game.js";
import Card from "./card.js";

let nivel = 0;
let cards = 4

export const startButton = document.getElementById('startButton');
startButton.addEventListener('click',()=>{
  let game = new Game(nivel,cards)
  game.newGame();
})




