'use strict';
// https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
var config = require('./config');
const mysql = require('mysql');


// * local mysql db connection
var connection = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.pwd,
  database: config.mysql.database,
});


connection.connect(function (err) {
  if (err) throw err;
});


module.exports = connection;