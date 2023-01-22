// Code your solutions in this file

function writeCards(names,eventName) {
    for (let i = 0; i < names.length; i++) {
       arrayMessage[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    }
  return arrayMessage
}

const names = ["Charlie", "Samip", "Ali"];
const eventName = ["birthday"];
const arrayMessage = []


function countDown() {
    let n = 10;
    while (n > -1) {
        console.log(n--)
    }
}





// examples

// for (let age = 30; age < 40; age ++) {
//     console.log (`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts
// }

// wrapGift(gifts)