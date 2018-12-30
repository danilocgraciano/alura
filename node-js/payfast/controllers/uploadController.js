const fs = require('fs');

module.exports = (app) => {

    app.post('/upload/imagem', (req, res) => {

        var filename = req.headers.filename;
        console.log('Arquivo recebido' + filename);

        req.pipe(fs.createWriteStream("files/" + filename))
            .on('finish', () => res.sendstatus(201));

    });
}