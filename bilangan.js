let bilangan = [1, 2, 3, 4, 5];
let hasil = [];

for (let i = 0; i < bilangan.length; i++) {
    let hitung = 0;
    // console.log("Looping i  : " + (i + 1));

    for (let j = 0; j < bilangan.length; j++) {
        // console.log("Looping j ke : " + (j + 1));
        if (bilangan[i] == bilangan[j]) {

        } else {
            hitung = hitung + bilangan[j];
        }
        hasil[i] = hitung;
    }
    console.log(hasil);
}
// Output menggunakan fungsi Math
const max = Math.max(...hasil);
const min = Math.min(...hasil);
console.log("Nilai Min : " + min + " , Nilai Max : " + max);

let nilai_min = 0;
let nilai_max = 0;
for (let x = 0; x < hasil.length; x++) {
    if (nilai_max < hasil[x]) {
        nilai_max = hasil[x];
    }
}

console.log(nilai_max);