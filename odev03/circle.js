function circleArea(r) {
    return Math.PI * Math.pow(r, 2); // Dairenin alanını hesaplıyoruz
}

function circleCircumference(r) {
    return 2 * Math.PI * r; // Dairenin çevresini hesaplıyoruz
}

module.exports = {
    circleArea,
    circleCircumference,
};
