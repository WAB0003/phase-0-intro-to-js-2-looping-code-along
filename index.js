// Code your solutions in this file
const names = ["Charlie", "Bill", "Frank"]


function writeCards(names,eventName) {
    let messageArray = [""];
    for (let i =0; i < names.length; i++ ) {
    messageArray[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    }
    return messageArray
}

//write a countdown WHILE function

function countDown (number) {
    
    while (number > -1) {
        console.log(number--)
    }
}