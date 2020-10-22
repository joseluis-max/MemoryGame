export function random(min=1,max=100){
   let random = Math.floor(Math.random()*(max - min + 1))+min;
   return random
}

export function transformdata(data){
   let lettersData = [];
   data.forEach(d=>{
      switch (d) {
         case 1:
            lettersData.push('one')
            break;
         case 2:
            lettersData.push('two')
            break;
         case 3:
            lettersData.push('three')
            break;
         case 4:
            lettersData.push('four')
            break;
         case 5:
            lettersData.push('five')
            break;
         case 6:
            lettersData.push('six')
            break;
      }
   })
   return lettersData
};
export function transformNumber(number){
   let num;
      switch (number) {
         case 1:
            num ='one'
            break;
         case 2:
            num = 'two'
            break;
         case 3:
            num ='three'
            break;
         case 4:
            num ='four'
            break;
         case 5:
            num ='five'
            break;
         case 6:
            num ='six';
            break;
      }
   return num;
};