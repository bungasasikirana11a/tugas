// bunga-10.js
const produkKasir = [
  { nama: "Mouse", harga: 50000 },
  { nama: "Keyboard", harga: 100000 },
  { nama: "Monitor", harga: 1500000 },
  { nama: "Headset", harga: 200000 }
];

const belanja = [
  { nama: "Mouse", jumlah: 2 },
  { nama: "Keyboard", jumlah: 1 },
  { nama: "Headset", jumlah: 1 }
];

let subtotal = 0;
console.log("========= STRUK PEMBELIAN =========");
for (let item of belanja) {
  let p = produkKasir.find(prod => prod.nama === item.nama);
  let sub = p.harga * item.jumlah;
  subtotal += sub;
  console.log(`${p.nama} x${item.jumlah} Rp${sub}`);
}

let diskon = subtotal > 500000 ? subtotal * 0.10 : 0;
let total = subtotal - diskon;

console.log("-----------------------------------");
console.log("Subtotal Rp" + subtotal);
console.log("Diskon Rp" + diskon);
console.log("Total Rp" + total);
console.log("===================================");