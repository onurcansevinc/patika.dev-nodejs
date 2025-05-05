const Koa = require('koa');
const app = new Koa();

// response
app.use((ctx) => {
    ctx.path = ctx.path; // URL'den gelen path bilgisini alıyoruz

    if (ctx.path === '/') {
        ctx.body = '<h1>Index Sayfasına Hoşgeldiniz</h1>';
    } else if (ctx.path === '/hakkimda') {
        ctx.body = '<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>';
    } else if (ctx.path === '/iletisim') {
        ctx.body = '<h1>İletişim Sayfasına Hoşgeldiniz</h1>';
    }
});

app.listen(3000);
console.log('Server running on http://localhost:3000');
