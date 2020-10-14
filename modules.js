export function random(min=1,max=100){
   let random = Math.floor(Math.random()*(max - min + 1))+min;
   return random
}