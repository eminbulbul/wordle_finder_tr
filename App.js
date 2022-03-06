//5 harfli türkçe kelimelerin olduğu array (five_letters.js den geliyor)
const letters = fiveLetters;

const findWord = document.getElementById("find");
let letterOne = document.getElementById("letterone");
let letterTwo = document.getElementById("lettertwo");
let letterThree = document.getElementById("letterthree");
let letterFour = document.getElementById("letterfour");
let letterFive = document.getElementById("letterfive");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

let searchResult ;
let playerArray ;

let indexOne = [];
let indexTwo = [];
let indexThree = [];
let indexFour = [];
let indexFive = [];


let wrongLetter = [];

reset.addEventListener("click", () => {
  playerArray = [];
  indexOne = [];
  indexTwo = [];
  indexThree = [];
  indexFour = [];
  indexFive = [];
  wrongLetter = [];
}),
  findWord.addEventListener("click", () => {
            letters.forEach(a => {
            console.log(a );
            console.log(letterOne.value, letterTwo.value);
            console.log(a.startsWith(letterOne.value));
            if ((letterOne.value) && (a.startsWith(letterOne.value)) || (letterTwo.value && a[1]==(letterTwo.value))       ){
                indexOne.push(a)
            }
        });
        // letters.forEach(b => {
        //     if (b[1] ==(letterTwo.value)) {
        //         indexTwo.push(b)
        //     }
        // });
        // letters.forEach(c => {
        //     if (c[2] == (letterThree.value)) {
        //         indexThree.push(c)
        //     }
        // });
        // letters.forEach(d => {
        //     if (d[3] == (letterFour.value)) {
        //         indexFour.push(d)
        //     }
        // });
        // letters.forEach(e => {
        //     if (e[4] == (letterFive.value)) {
        //         indexFive.push(e)
        //     }


        console.log(indexOne);
        });
    // console.log(indexOne);    
    // console.log(indexTwo);    
    // console.log(indexThree);    
    // console.log(indexFour);    
    // console.log(indexFive);    

    
    // playerArray = [indexOne, indexTwo, indexThree,indexFour, indexFive];

    // console.log(playerArray);
    
    // playerArray = playerArray.filter(element => element !== [])

    


    // searchResult = playerArray.reduce((f, g) => f.filter(h => g.includes(h)));

    // console.log(searchResult);


