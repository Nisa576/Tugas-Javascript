
// mengecek apakah nilai n adalah bilangan prima
function checkprima(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return console.log("Nilai n : " + n + " Bukan Bilangan Prima");
        }
    }
    return console.log("Nilai n : " + n + " Bilangan Prima");
}

// console.log(checkprima(3));

let input = [2,3,4,5,6,7,8,9,10,11,12]

for (let x = 0; x < input.length; x++){
    checkprima(input[x]);
}


