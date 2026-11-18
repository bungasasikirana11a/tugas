// bunga-02.js
let hargaBarang = 25000;
let jumlahBarang = 4;
let diskonPersen = 10;

let totalAwal = hargaBarang * jumlahBarang; // 100000
let besaranDiskon = totalAwal * diskonPersen / 100; // 10000
let totalBayar = totalAwal - besaranDiskon; // 90000

console.log("Total sebelum diskon: Rp" + totalAwal);
console.log("Besaran diskon: Rp" + besaranDiskon);
console.log("Total bayar: Rp" + totalBayar);