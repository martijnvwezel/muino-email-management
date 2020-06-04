'user strict';
/*
* Copyright (c) 2020 Muino
* name: Martijn van Wezel   martijnvwezel@muino.nl
* bugs:
*       - TODO: implement TODO functions
* comment:
 *       -
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
async function getUsers() {
    return result = await dbQuery('SELECT d.name, u.email FROM virtual_users AS u INNER JOIN virtual_domains AS d ON (d.id = u.domain_id);');
}

async function insertUser(domain, email, password) {
    let pwdHash = crypto.createHmac('sha256', password);
    return result = await dbQuery('INSERT INTO virtual_users (domain_id, email, password) VALUES ( (SELECT id FROM virtual_domains WHERE name='+domain+'), '+email+', '+pwdHash+');'); 
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
