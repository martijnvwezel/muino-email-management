'user strict';
/*
* Copyright (c) 2020 Muino
* name: Martijn van Wezel   martijnvwezel@muino.nl
* bugs:
*       - TODO: implement TODO functions
*
* comment:
*       - Issue with insertUser that the hash should be 
*/

const db = require('../config/mysqldatabase');
const crypto = require('crypto');

module.exports = {
    getUsers,
    insertUser,
    deleteUser,
    updateUser,

    getDomains,
    insertDomain,
    deleteDomain,
    updateDomain,

    getAliases,
    insertAliases,
    deleteAliases,
    updateAliases   
}



// * User
async function getUsers() {// * Limited to 100 items
    return result = await dbQuery('SELECT d.name, u.email FROM virtual_users AS u INNER JOIN virtual_domains AS d ON (d.id = u.domain_id) LIMIT 0, 200;');
}

 
async function insertUser(domain, email, password) {
    // let length = 16;
    // let salt = crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0,length);
    // salt = 'f2a4385dd16101f3';
    // const hashedSaltPwd = crypto.createHmac('sha256', salt).update(password).digest('hex');

    // console.log('Password: ', password);    
    // console.log('salt: ', salt);
    // console.log('hashedSaltPwd: ', hashedSaltPwd);
    // console.log('Expected: \n {SHA256-CRYPT}$5$f2a4385dd16101f3$pq18vUF9GZLi0YLwB5CNzuwOISxTSMwpF8BBqncerS5');
    
    
    // {SHA256-CRYPT}$5$f2a4385dd16101f3$pq18vUF9GZLi0YLwB5CNzuwOISxTSMwpF8BBqncerS5
    // {SHA256-CRYPT}$5$f2a4385dd16101f3$21c7c38080ee7a1ecd5e5e522490080a6105695c37acb60377d56e7ac56f2d85
    // $5$BIER$Kf993hWfcQQlkxA10xtzsZA3z1NaIKr6OEu7vht.II9
    
    // const pwdHash = "{SHA256-CRYPT}$5$"+salt+'$'+hashedSaltPwd;
    // console.log("Got:\n",pwdHash);    
    return result = await dbQuery('INSERT INTO virtual_users (domain_id, email, password) VALUES ( (SELECT id FROM virtual_domains WHERE name='+domain+'), '+email+', '+pwdHash+');'); 
    // let result = await dbQuery('INSERT INTO virtual_users (domain_id, email, password) VALUES ( (SELECT id FROM virtual_domains WHERE name="'+domain+'"), "'+email+'", CONCAT("{SHA256-CRYPT}", ENCRYPT("'+password+'", CONCAT("$5$", SUBSTRING(SHA(RAND()), -16)))));'); 
    // if(result.sqlMessage=="Column 'password' cannot be null"){
    //     console.log();  
    //     throw"Does not  work in windows, no crypto lib given";
    // }
    // return result;
}


async function deleteUser(email) {
    return result = await dbQuery('DELETE FROM virtual_users WHERE email='+email+';');
}

async function updateUser() { 
    throw "not implemented function";
    return result = await dbQuery(''); // TODO: Implement query
     
}


// * Domain
async function getDomains() {
    return result = await dbQuery('SELECT name FROM virtual_domains ORDER BY id;');
}

async function insertDomain(domainName) {
    return result = await dbQuery('INSERT INTO virtual_domains(name) VALUES ('+domainName+');');
}


async function deleteDomain(domainName) {
    return result = await dbQuery('DELETE FROM virtual_domains WHERE name='+domainName+';');
}

async function updateDomain() {
    throw "not implemented function";
    return result = await dbQuery(''); // TODO: Implement query
}



// * Aliases
async function getAliases() {
    return result = await dbQuery('SELECT d.name, a.source, a.destination FROM virtual_aliases AS a INNER JOIN virtual_domains AS d ON (d.id = a.domain_id);');
}

async function insertAliases(domain, source, dest) {
    return result = await dbQuery('INSERT INTO virtual_aliases (domain_id, source, destination) VALUES ( (SELECT id FROM virtual_domains WHERE name='+domain+'), '+source+', '+dest+');');
}


async function deleteAliases(alias) {
    return result = await dbQuery('DELETE FROM virtual_aliases WHERE source='+alias+';');
} 

async function updateAliases() {
    throw "not implemented function";
    return result = await dbQuery(''); // TODO: Implement query
}




// * Important promise function
function dbQuery(databaseQuery) {
    return new Promise(data => {
        db.query(databaseQuery, function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });

}
