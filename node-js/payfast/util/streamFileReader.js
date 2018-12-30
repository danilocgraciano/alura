const fs = require('fs');

// node streamFileReader.js <nome_do_arquivo>
let file = process.argv[2];

fs.createReadStream(file)
    .pipe(fs.createWriteStream('novo-' + file))
    .on('finish', () => console.log('arquivo escrito com stream'));