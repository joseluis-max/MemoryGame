import {random} from './modules.js'
export default class Game {
  constructor(nivel,cards){
    this.nivel = nivel;
    this.cards = cards;
  }
  newGame(){
    console.log('New Game')
    this.sequence()
  }
  endGame(){
    console.log("End game")
  }
  againGame(){
    console.log("Again game")
  }
  sequence(){
    let data = new Array(12).fill(0).map( n => n = random(1,6));
    let count = {
      one:0,
      two:0,
      three:0,
      four:0,
      five:0,
      six:0,
    }
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
    if (count['one'] == 2 && count['two'] == 2  && count['three'] == 2 && count['four'] == 2 && count['five'] == 2  && count['six'] == 2 ) {
      console.log('estamos bien')
      console.log(data)
      console.log(count)
    }else{
      this.sequence()
    }
  }
}
