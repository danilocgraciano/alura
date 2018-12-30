const fs = require('fs');

// node fileReader.js <nome_do_arquivo>
let file = process.argv[2];

// BUFFER MODE
fs.readFile(file, (error, buffer) => {

    console.log('Arquivo lido');

    fs.writeFile('novo-' + file, buffer, (err) => {
        console.log('Arquivo escrito');
    })
});