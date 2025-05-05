const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Node.js ile Web Sunucusu</h1>');
    res.write('<h2>Hoşgeldiniz</h2>');

    if (req.url === '/') {
        res.write('<h2>Anasayfa</h2>');
    } else if (req.url === '/hakkimda') {
        res.write('<h2>Hakkımda Sayfası</h2>');
    } else if (req.url === '/iletisim') {
        res.write('<h2>İletişim Sayfası</h2>');
    } else {
        res.write('<h2>404 Not Found</h2>');
    }

    res.end();
});

server.listen(5000, () => {
    console.log('Sunucu 5000 portunda çalışıyor...');
});
