
//5 harfli türkçe kelimelerin olduğu array (five_letters.js den geliyor)
const letters = fiveLetters;

const findWord =document.getElementById("find");
let letterOne = document.getElementById('letterone');
let letterTwo = document.getElementById('lettertwo');
let letterThree = document.getElementById('letterthree');
let letterFour = document.getElementById('letterfour');
let letterFive = document.getElementById('letterfive');

let result =document.getElementById("result");


findWord.addEventListener("click",()=>{
    let playerArray = [];
  
    if (letterOne.value != "") {
        playerArray.push(letterOne.value);
    }else{
        playerArray.push("*");
    };
    if (letterTwo.value != "") {
        playerArray.push(letterTwo.value);
    }else{
        playerArray.push("*");
    };
    if (letterThree.value != "") {
        playerArray.push(letterThree.value);
    }else{
        playerArray.push("*");
    };
    if (letterFour.value != "") {
        playerArray.push(letterFour.value);
    }else{
        playerArray.push("*");
    };
    if (letterFive.value != "") {
        playerArray.push(letterFive.value);
    }else{
        playerArray.push("*");
    };

    playerArray = playerArray.join("").toLowerCase();

    

});


// for (let index = 0; index < letters.length; index++) {
//     if (letters[index][3] == player[3]) {
//         console.log(letters[index]);
//     }
// }

