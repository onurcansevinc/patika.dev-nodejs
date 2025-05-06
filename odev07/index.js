const express = require('express');
const app = express();

app.use(express.static('public'));

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

app.get('/', (req, res) => {
    res.send(blog);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
