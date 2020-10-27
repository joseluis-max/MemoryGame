import Game from "./game.js";

export let imgBg ="./luciano/poker.jpg"

let data = {
  nivel:1,
  numCards:4,
}

export const startButton = document.getElementById('startButton');
startButton.addEventListener('click',()=>{
  startGame(data)
})

function startGame(data){
   let game = new Game(data.nivel,data.numCards);
  game.newGame();
  let r = game.handleEventClick();
}




