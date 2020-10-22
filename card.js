export default class Card {
  constructor(img,state){
    this.img = img;
    this.state = state;
  }
  mounting(){
    let container = document.querySelector('.container');
    container.innerHTML += `<div class="card"><img src="luciano/poker.jpg"/></div>`
  }
  toToggleTurnUpDown(image){
    if (this.state == 'Up') {
      image.src = `./luciano/poker.jpg`
      this.state = 'Down'
    }else{
      image.src = `./luciano/${this.img}.jpg`
      this.state = 'Up'
    }
  }
  similarity(){
    console.log('are similarity ...')
  }
  dissimilarity(){
    console.log('Dont are similarity')
  }
}