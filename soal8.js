// bunga-08.js
const produk = {
  nama: "Laptop",
  harga: 7500000,
  stok: 10,
  kategori: "Elektronik"
};

console.log(produk.nama, produk.harga);
produk.stok = 5; // ubah
produk.merek = "Lenovo"; // tambah

console.log("Data akhir:", produk);