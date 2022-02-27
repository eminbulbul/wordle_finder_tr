//5 harfli türkçe kelimelerin olduğu array (five_letters.js den geliyor)
const letters = fiveLetters;

const findWord = document.getElementById("find");
let letterOne = document.getElementById("letterone");
let letterTwo = document.getElementById("lettertwo");
let letterThree = document.getElementById("letterthree");
let letterFour = document.getElementById("letterfour");
let letterFive = document.getElementById("letterfive");
let reset =document.getElementById("reset");
let result = document.getElementById("result");

let playerArray = [];

reset.addEventListener("click",()=>{
    playerArray = [];
}),

findWord.addEventListener("click", () => {
  if (letterOne.value != "") {
    playerArray.push(letterOne.value);
  } 
  if (letterTwo.value != "") {
    playerArray.push(letterTwo.value);
  } 
  if (letterThree.value != "") {
    playerArray.push(letterThree.value);
  } 
  if (letterFour.value != "") {
    playerArray.push(letterFour.value);
  } 
  if (letterFive.value != "") {
    playerArray.push(letterFive.value);
  }

  let newPlayerArray = playerArray.join("").toLowerCase();

  for (let index = 0; index < letters.length; index++) {
    if (letters[index].includes(newPlayerArray)) {
      console.log(letters[index]);
    };
  };
});
