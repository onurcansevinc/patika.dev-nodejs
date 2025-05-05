const fs = require('fs');
const path = require('path');

async function createFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, 'employee.json'), '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
            if (err) reject(err);
            resolve('employees.json dosyası oluşturuldu ve veri yazıldı.');
        });
    });
}

async function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'employee.json'), 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

async function updateFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, 'employee.json'), data, 'utf8', (err) => {
            if (err) reject(err);
            resolve('employees.json dosyası güncellendi.');
        });
    });
}

async function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, 'employee.json'), (err) => {
            if (err) reject(err);
            resolve('employees.json dosyası silindi.');
        });
    });
}

(async () => {
    try {
        const createMessage = await createFile();
        console.log(createMessage);

        const readData = await readFile();
        console.log('employees.json dosyası okundu: ', readData);

        const updatedData = JSON.parse(readData);
        updatedData.name = 'Employee 1 Name Updated';
        updatedData.salary = 2500;
        const updateMessage = await updateFile(JSON.stringify(updatedData));
        console.log(updateMessage);

        const deleteMessage = await deleteFile();
        console.log(deleteMessage);
    } catch (error) {
        console.error('Hata: ', error);
    }
})();
