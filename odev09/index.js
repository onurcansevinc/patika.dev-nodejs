const ejs = require('ejs');
const path = require('path');
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const Post = require('./models/Post');

// MONGOOSE CONNECTION
mongoose
    .connect('mongodb://localhost:27017/odev09', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// TEMPLATE ENGINE
app.set('view engine', 'ejs'); // EJS template engine kullanıyoruz
app.set('views', path.join(__dirname, 'views')); // EJS template dosyalarının bulunduğu dizini ayarlıyoruz

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public'))); // Static dosyaları sunmak için middleware ekliyoruz
app.use(express.urlencoded({ extended: true })); // URL encoded verileri işlemek için middleware ekliyoruz
app.use(express.json()); // JSON verileri işlemek için middleware ekliyoruz

app.get('/', async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 }); // Postları ters sırada alıyoruz
    res.render('index', { posts }); // EJS template dosyasını render ediyoruz
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

app.post('/add_post', (req, res) => {
    // Burada form verilerini alıp işleyebilirsiniz
    // Örneğin, veritabanına kaydedebilirsiniz
    const { title, details } = req.body;

    // Post modelini kullanarak yeni bir post oluşturabilirsiniz
    const newPost = new Post({ title, details });
    newPost
        .save()
        .then(() => res.redirect('/'))
        .catch((err) =>
            res.status(500).send('Error saving post: ' + err.message)
        );
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
