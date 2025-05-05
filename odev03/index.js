// circle.js dosyasından fonksiyonları içe aktarma
const { circleArea, circleCircumference } = require('./circle');

// Yarıçap (r) değeri
const radius = 5;

// Sonuçları consola yazdırma
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea(radius).toFixed(2)}`);
console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circleCircumference(radius).toFixed(2)}`);
