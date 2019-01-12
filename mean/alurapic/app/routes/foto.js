module.exports = function (app) {

    let api = app.api.foto;

    app.get('/v1/fotos', api.list);

    app.get('/v1/fotos/:id', api.findById);

};