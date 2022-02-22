let player = 'abac'

const kelime = ["abacı","abalı","abadi"];;

let letterOne = document.getElementById('letterone')
let letterTwo = document.getElementById('letterone')





for (let index = 0; index < kelime.length; index++) {
    if (kelime[index][3] == player[3]) {
        console.log(kelime[index]);
    }
}

