const first= document.querySelector('.fi');
const second= document.querySelector('.se');
const third= document.querySelector('.rd');
const fourth= document.querySelector('.rth');
const fifth= document.querySelector('.th');
const sixth= document.querySelector('.xith');
const seventh= document.querySelector('.venth');
const eighth= document.querySelector('.hth');
const ninth= document.querySelector('.ninth');
const who = document.querySelector('.who');
const button = document.querySelector('.button');

let hello;
let arr = [0,0,0,0,0,0,0,0,0,0];
let index;
let parity = 1;
let winner = false;

// main function:
//player 1 = 'x' && player 2 = 0

function hi() {

 if(winner == false){
  if(arr[index] == 0){

   if(parity > 0){

    hello.innerHTML = 'x';
    arr[index] = 'x';
    parity *= -1;
 }else {
   hello.innerHTML = 'o';
   arr[index] = 'o';
   parity *= -1;
  }
}
 //checking who is the winne:
 if( (arr[1] === arr[4] && arr[4] === arr[7] ) ||
     (arr[1] === arr[5] && arr[5] === arr[9] ) ||
     (arr[1] === arr[2] && arr[2] === arr[3]) ){

    if(arr[1] !== 0){

     winner = true;
     who.innerHTML = `${(arr[1] == 'x')? "Player 1 is the winner" :  "player 2 is the winner"} `;

   }
   }else if (arr[2] === arr[5] && arr[5] === arr[8]) {
    if(arr[2] !== 0){

     winner = true;
     who.innerHTML = `${(arr[2] == 'x')? "Player 1 is the winner" :    "player 2 is the winner"}`;
   }

   }else if ((arr[3] === arr[6] && arr[6] === arr[9]) ||
       (arr[3] === arr[5] && arr[5] === arr[7]) ){
    if(arr[3] !== 0){

     winner = true;
    who.innerHTML = `${(arr[3] == 'x')? "Player 1 is the winner" :    "player 2 is the winner"}`;

   }
   }else if (arr[9] === arr[8] && arr[8] === arr[7]) {
      if(arr[9] !== 0){

        winner = true;
         who.innerHTML =`${(arr[9] == 'x')? "Player 1 is the winner" :    "player 2 is the winner"}`;

     }
   }else if (arr[4] === arr[5] && arr[5] === arr[6]) {
      if(arr[4] !== 0){

        winner = true;
          who.innerHTML =`${(arr[4] == 'x')? "Player 1 is the winner" :    "player 2 is th}`e winner"}`;
       }

     }
     let zeros = 0;
     arr.forEach((item, i) => {
         if(item !== 0){
           zeros++;
         }
     });
      if(zeros == 9){
        who.innerHTML = "its a draw!";
      }
  }

}

// calling the function:

first.addEventListener('click', function () {
  hello = first;
  index = 1;
  hi();
},false);

second.addEventListener('click', function () {
  hello = second;
  index = 2;
  hi();
},false);

third.addEventListener('click', function () {
  hello = third;
  index = 3;
  hi();
},false);
fourth.addEventListener('click', function () {
  hello = fourth;
  index = 4;
  hi();
},false);

fifth.addEventListener('click', function () {
  hello = fifth;
  index = 5;
  hi();
},false);

sixth.addEventListener('click', function () {
  hello = sixth;
  index = 6;
  hi();
},false);

seventh.addEventListener('click', function () {
  hello = seventh;
  index = 7;
  hi();
},false);

eighth.addEventListener('click', function () {
  hello =eighth;
  index = 8;
  hi();
},false);

ninth.addEventListener('click', function () {
  hello = ninth;
  index = 9;
  hi();
},false);

button.addEventListener('click',()=>{
      location.reload(true);
});
