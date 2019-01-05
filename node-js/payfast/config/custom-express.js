const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const logger = require('../servicos/logger.js');

module.exports = () => {
    const app = express();

    app.use(morgan("common", {
        stream: {
            write: function (message) {
                logger.info(message)
            }
        }
    }));

    app.use(bodyParser.json());
    app.use(expressValidator());

    consign()
        .include('./controllers')
        .then('./persistencia')
        .then('./servicos')
        .into(app);
    return app;
};