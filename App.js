// //5 harfli türkçe kelimelerin olduğu array (five_letters.js den geliyor)
// const letters = fiveLetters;

// const findWord = document.getElementById("find");
// let letterOne = document.getElementById("letterone");
// let letterTwo = document.getElementById("lettertwo");
// let letterThree = document.getElementById("letterthree");
// let letterFour = document.getElementById("letterfour");
// let letterFive = document.getElementById("letterfive");
// let reset =document.getElementById("reset");
// let result = document.getElementById("result");

// let playerArray = [];

// reset.addEventListener("click",()=>{
//     playerArray = [];
// }),

// findWord.addEventListener("click", () => {
//   if (letterOne.value != "") {
//     playerArray.push(letterOne.value);
//   } 
//   if (letterTwo.value != "") {
//     playerArray.push(letterTwo.value);
//   } 
//   if (letterThree.value != "") {
//     playerArray.push(letterThree.value);
//   } 
//   if (letterFour.value != "") {
//     playerArray.push(letterFour.value);
//   } 
//   if (letterFive.value != "") {
//     playerArray.push(letterFive.value);
//   }

//   let newPlayerArray = playerArray.join("").toLocaleLowerCase();

//   for (let index = 0; index < letters.length; index++) {
//     if (letters[index].includes(newPlayerArray)) {
//       console.log(letters[index]);
//     };
//   };
// });

// tum kutuphane icerisinde kalan degiskenlerin indexlerine denk gelen harflere bak. 5 ayri dizi yap. eger dogru ise dizinin icine atsin.
//daha sonra bu 5 dizinin kesimini bul. sonuc dogru verir.




// for intersection
// var array1 = ["Lorem", "ipsum", "dolor",'ali'],
//     array2 = ["Lorem", "ipsum", "quick", "brown", "foo",'ali'],
//     array3 = ["Jumps", "Over", "Lazy", "Lorem",'ali'],
//     array4 = [1337, 420, 666, "Lorem",'ali'],
//     data = [array1, array2, array3, array4],
//     result = data.reduce((a, b) => a.filter(c => b.includes(c)));
//     console.log(result);
// output : (2) ['Lorem', 'ali']