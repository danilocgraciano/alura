const winston = require('winston');
const fs = require('fs');

if (!fs.existsSync('logs'))
    fs.mkdirSync('logs');

module.exports = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            name: 'info',
            filename: 'logs/info.log',
            level: 'info'
        }),
        new (winston.transports.File)({
            name: 'error',
            filename: 'logs/error.log',
            level: 'error'
        })
    ]
});