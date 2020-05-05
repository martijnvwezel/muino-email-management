'use strict';

const config = require('./config');


const MysqlClient = require('mysql').createConnection({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.pwd,
    database: config.mysql.database  
});


MysqlClient.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});


module.exports = MysqlClient;