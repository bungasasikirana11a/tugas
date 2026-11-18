// bunga-06.js
const nilai = [80, 75, 90, 65, 85, 95, 70];

console.log("Semua nilai:", nilai);
console.log("Tertinggi:", Math.max(...nilai));
console.log("Terendah:", Math.min(...nilai));

let total = 0;
for (let n of nilai) { total += n; }
console.log("Rata-rata:", total / nilai.length);
console.log("Jumlah lulus:", nilai.filter(n => n >= 75).length);