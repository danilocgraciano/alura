module.exports = function (app) {

    let api = app.api.foto;

    app.get('/v1/fotos', api.list);

    app.route('/v1/fotos/:id')
        .get(api.findById)
        .delete(api.deleteById);

};