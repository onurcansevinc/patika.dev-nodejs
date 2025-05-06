const ejs = require('ejs');
const path = require('path');
const express = require('express');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs'); // EJS template engine kullanıyoruz
app.set('views', path.join(__dirname, 'views')); // EJS template dosyalarının bulunduğu dizini ayarlıyoruz

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public'))); // Static dosyaları sunmak için middleware ekliyoruz

app.get('/', (req, res) => {
    res.render('index'); // EJS template dosyasını render ediyoruz
});

app.get('/about', (req, res) => {
    res.render('about'); // EJS template dosyasını render ediyoruz
});

app.get('/add_post', (req, res) => {
    res.render('add_post'); // EJS template dosyasını render ediyoruz
});

app.get('/posts', (req, res) => {
    res.render('posts'); // EJS template dosyasını render ediyoruz
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
