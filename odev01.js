/*
Ödev 1

Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.



Kolay gelsin.
*/

const pi = Math.PI; // π sayısını alıyoruz
const radius = process.argv[2]; // Komut satırından yarıçapı alıyoruz
const area = pi * Math.pow(radius, 2); // Dairenin alanını hesaplıyoruz

return console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`); // Sonucu konsola yazdırıyoruz
