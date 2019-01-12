module.exports = function (app) {

    let api = app.api.grupo

    app.get('/v1/grupos', api.lista);

};