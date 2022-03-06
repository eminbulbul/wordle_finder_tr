//5 harfli türkçe kelimelerin olduğu array (five_letters.js den geliyor)
const findWord = document.getElementById("find");
let letterOne = document.getElementById("letterone");
let letterTwo = document.getElementById("lettertwo");
let letterThree = document.getElementById("letterthree");
let letterFour = document.getElementById("letterfour");
let letterFive = document.getElementById("letterfive");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

reset.addEventListener("click", () => {});

findWord.addEventListener("click", () => {
  const search =
    (letterOne.value || "-") +
    (letterTwo.value || "-") +
    (letterThree.value || "-") +
    (letterFour.value || "-") +
    (letterFive.value || "-");

  console.log(search);

  const filteredLetters = fiveLetters.filter((letter) => {
    let found = true;

    for (let i in search) {
      if (search[i] === "-") continue;

      if (search[i] !== letter[i]) {
        found = false;
        break;
      }
    }

    if (found) {
      return letter;
    }
  });
  console.log(filteredLetters);
});

// kendime not:
// sonucu result spanının içine yazdır. daha sonra harf ele tuşuna basarak result spani içindeki sonuçları ele. bootstrap ile nasıl çalıştığı hakkında bir gif koy ve açılış sayfasında bunu oynat. çok güzel bir uygulama olacak.
