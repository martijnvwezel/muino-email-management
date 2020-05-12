'user strict';
const MariaDB = require('../config/mysqldatabase');


module.exports = {
    getAllEmail

}


function getAllEmail(newEmail) {
    MariaDB.query("SELECT name FROM virtual_domains ORDER BY id;", null, {}, function (err, rows) {
        if (err)
            throw err;

        console.dir(rows);

        return rows;
    });





}
