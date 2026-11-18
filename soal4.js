// bunga-04.js
let jumlahGenap = 0;

console.log("Genap:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    jumlahGenap = jumlahGenap + i; // ditambah terus
  }
}

console.log("Ganjil:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("Total jumlah genap:", jumlahGenap);