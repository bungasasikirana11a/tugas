// bunga-03.js
let nilai = 82; // coba ganti-ganti angkanya
let predikat;

if (nilai < 0 || nilai > 100) {
  predikat = "Nilai tidak valid";
} else if (nilai >= 85) {
  predikat = "A";
} else if (nilai >= 75) {
  predikat = "B";
} else if (nilai >= 65) {
  predikat = "C";
} else if (nilai >= 50) {
  predikat = "D";
} else {
  predikat = "E";
}
console.log("Nilai", nilai, "predikatnya", predikat);