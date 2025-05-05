/*
Ödev 2 - Post Sıralama ve Post Ekleme
Post Sıralama ve Post Ekleme

Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.



Kolay gelsin.
*/

const posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
];

const newPost = { id: 4, title: 'Post 4', content: 'Content of Post 4' };

const showPosts = async () => {
    console.log('Postlar sıralanıyor...');
    console.log(await sortPosts());

    console.log('Yeni post ekleniyor...');
    console.log(await addPost(newPost));
};

async function sortPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts);
        }, 2000); // 2 saniye bekle
    });
}

async function addPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(posts);
        }, 2000); // 2 saniye bekle
    });
}

showPosts();
