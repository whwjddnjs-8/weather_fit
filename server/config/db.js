var mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Wlsud4207!',
    database : 'weather_fit'
});

module.exports = db;