//5 harfli türkçe kelimelerin olduğu array (five_letters.js den geliyor)
const findWord = document.getElementById("find");
let letterOne = document.getElementById("letterone");
let letterTwo = document.getElementById("lettertwo");
let letterThree = document.getElementById("letterthree");
let letterFour = document.getElementById("letterfour");
let letterFive = document.getElementById("letterfive");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let removeLetter = document.getElementById("addwl");
let remIn = document.getElementById("wrongletter");

reset.addEventListener("click", () => {
  window.location.reload(false);
});

findWord.addEventListener("click", () => {
  result.innerText = "";
  const search =
    (letterOne.value.toLocaleLowerCase("tr") || "-") +
    (letterTwo.value.toLocaleLowerCase("tr") || "-") +
    (letterThree.value.toLocaleLowerCase("tr") || "-") +
    (letterFour.value.toLocaleLowerCase("tr") || "-") +
    (letterFive.value.toLocaleLowerCase("tr") || "-");

  console.log(search);

  let filteredLetters = fiveLetters.filter((letter) => {
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

  console.log("filtered letters are  " + filteredLetters);

  filteredLetters.forEach((element) => {
    result.innerText += element + "\n";
  });

  let eLetter = [];

  removeLetter.addEventListener("click", () => {
    result.innerText = "";

    eLetter.push(remIn.value.toLocaleLowerCase("tr"));

    console.log(eLetter);

    let erasedLetters = filteredLetters.filter((e) => {
      let doesInclude = false;
      for (let harf of eLetter) {
        if (e.includes(harf)) {
          doesInclude = true;
        }
      }
      if (!doesInclude) return e;
    });

    console.log(filteredLetters);

    erasedLetters.forEach((fixed) => {
      result.innerText += fixed + "\n";
    });
  });
});

// kendime not:
// sonucu result spanının içine yazdır. daha sonra harf ele tuşuna basarak result spani içindeki sonuçları ele. bootstrap ile nasıl çalıştığı hakkında bir gif koy ve açılış sayfasında bunu oynat. çok güzel bir uygulama olacak.
