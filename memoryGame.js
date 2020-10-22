import Game from "./game.js";

export let imgBg ="./luciano/poker.jpg"
let nivel = 0;
let cards = 4

export const startButton = document.getElementById('startButton');
startButton.addEventListener('click',()=>{
  let game = new Game(nivel,cards);
  game.newGame();
  let sequence = game.sequence(nivel);
  let c = game.template(sequence);
  c.forEach(c => {
    c.mounting()
  })
  game.handleEventClick(c);
})




