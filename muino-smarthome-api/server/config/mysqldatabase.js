'use strict';
// https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
var config = require('./config');

const mariadb = require('mariadb');



const MariaDB = mariadb.createConnection({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.pwd,
    database: config.mysql.database,
    connectionLimit: 5
  }).then(conn => {
    console.log("connected ! connection id is " + conn.threadId);
  })
  .catch(err => {
    console.log("not connected due to error: " + err);
  });


// MariaDB.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to MySQL database!");
// });



module.exports = MariaDB;