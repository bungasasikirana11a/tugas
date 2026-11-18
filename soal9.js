// bunga-09.js
const mahasiswa = [
  { nama: "bunga sasi kirana", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Doni", nilai: 70 },
  { nama: "Eka", nilai: 95 }
];

let lulus = mahasiswa.filter(m => m.nilai >= 75);
let tidakLulus = mahasiswa.filter(m => m.nilai < 75);

console.log("Lulus:", lulus);
console.log("Tidak lulus:", tidakLulus);
console.log("Jumlah lulus:", lulus.length);

// Urut dari nilai tertinggi
let ranking = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("Ranking:", ranking);