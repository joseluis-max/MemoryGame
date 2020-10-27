import {random} from './modules.js';
import {startButton} from './memoryGame.js';
import Card from './card.js';
    let option1;
    let option2;
export default class Game {
  constructor(nivel,numCards){
    this.nivel = nivel;
    this.numCards = numCards;
    this.order = [];
    this.cards = [];
  }
  newGame(){
    this.toToggleEnabledButtonStart()
    this.sequence(this.nivel,this.numCards);
    this.template();
    this.cards.forEach(c => {
      c.mounting();
    })
  };
  nextLevel(numCards  ){
    let state = [];
    this.cards.forEach(c => {
      if (c.state == 'Up') {
        state.push(c.state);
      }
    })
    if (state.length == numCards) {
      return true;
    }
  }
  endGame(){
    console.log("End game");
  }
  playAgain(){
  }
  sequence(nivel,numCards){
    let max = numCards/2
    let isReady;
    let data = new Array(numCards).fill(0).map( n => random(1,max));
    let count = {one:0,two:0,three:0,four:0,five:0,six:0,}
    data.map(n => {
      switch (n) {
        case 1:
          count['one'] =  count['one'] + 1;
          break;
        case 2:
          count['two'] =  count['two'] + 1;
          break;
        case 3:
          count['three'] =  count['three'] + 1;
          break;
        case 4:
          count['four'] =  count['four'] + 1;
          break;
        case 5:
          count['five'] =  count['five'] + 1;
          break;
        default:
            count['six'] =  count['six'] + 1;
        break;
      }
    })
    switch (nivel) {
      case 1:
        isReady = count['one'] == 2 && count['two'] == 2;
        break;
      case 2:
        isReady = count['one'] == 2 && count['two'] == 2  && count['three'] == 2;
        break;
      case 3:
        isReady = count['one'] == 2 && count['two'] == 2  && count['three'] == 2 && count['four'] == 2
        break;
      case 4:
        isReady = count['one'] == 2 && count['two'] == 2  && count['three'] == 2 && count['four'] == 2 && count['five'] == 2;
        break;
      default:
        isReady = count['one'] == 2 && count['two'] == 2  && count['three'] == 2 && count['four'] == 2 && count['five'] == 2  && count['six'] == 2;
        break;
    }
    if ( isReady ) {
     this.order = data;
    }else{
      this.sequence(nivel,numCards);
    }
  }
  toToggleEnabledButtonStart(){ 
    startButton.disabled ? startButton.disabled=false : startButton.disabled=true;
  }
  template(){
    this.order.forEach(o => {
      this.cards.push(new Card(o,'Down'))
    });
  }
  verification(option,target){
    if (!option1) {
      option1 = [option,target];
    }else{
      option2 = [option,target];
    }
    if (option1 && option2) {
      if (option2[0].img !== option1[0].img) {
        setTimeout(()=>{
          console.log('no iguales')
          option1[0].toToggleTurnUpDown(option1[1])
          option2[0].toToggleTurnUpDown(option2[1])
          option1 = null
          option2 = null
        },1000)
      }else{
        if(this.nextLevel(this.numCards)){
          this.nivel = this.nivel + 1;
          this.numCards = this.numCards + 2;
          this.cards = [];
          this.dismounting();
          this.newGame()
          this.handleEventClick()
          option1 = null
        option2 = null
        }else{
        option1 = null
        option2 = null
        }
      }
    }
  }
  handleEventClick(){
    let cardsDOM = document.querySelectorAll('.card');
    cardsDOM.forEach(c => {
      c.addEventListener('click',(ev)=>{
        let containerDOM = new Array(...ev.target.parentElement.parentElement.childNodes);
        if (containerDOM[0].nodeName == '#text') {
           containerDOM.shift()
        }
        let cardDOM = ev.target.parentElement;
        let index = containerDOM.indexOf(cardDOM);
        console.log(index)
        this.cards[index].toToggleTurnUpDown(ev.target);
        this.verification(this.cards[index],ev.target) 
      })
    })
  }
  dismounting(){
    let container = document.querySelector('.container');
    container.innerHTML = ``;
  }
}