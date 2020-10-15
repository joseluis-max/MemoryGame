export default class Card {
  constructor(img,state){
    this.img = img;
    this.state = state;
  }
  initialization(){
    let cards = document.querySelectorAll('.card');
    cards.forEach(card=>{
    card.addEventListener('click',(e)=>{
      if (this.state == 'Down') {
        this.turnUp(e)
      } else {
        this.turnDown(e)
      }

  })
})
  }
  mount(){
    let container = document.querySelector('.container');
    container.innerHTML += `<div class="card"><img src="luciano/${this.img}.jpg"/></div>`
  }
  turnUp(e){
    let c = e.target;
     c.classList.add('turnUp');
     c.classList.remove('turnDown');
    this.state = 'Up'
  }
  turnDown(e){
    let c = e.target;
      c.classList.add('turnDown');
       c.classList.remove('turnUp');
      this.state = 'Down'
  }
  similarity(){
    console.log('are similarity ...')
  }
  dissimilarity(){
    console.log('Dont are similarity')
  }
}