const express = require('express');
const consign = require('consign');

const app = express();
consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

app.use(express.static('./public'));

module.exports = app;