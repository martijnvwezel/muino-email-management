'use strict';
/*
* Copyright (c) 2020 Muino
* name: Martijn van Wezel   martijnvwezel@muino.nl
* bugs:
*       - TODO: implement catch function for when a domain does not exist
* comment:
 *       -
*/
const Joi = require('joi');
let Email = require('../models/email.model');

module.exports = {
    removeUser,
    getUser,
    changeUser,
    insertUser,

    removeDomain,
    getDomain,
    changeDomain,
    insertDomain,

    removeAlias,
    getAlias,
    changeAlias,
    insertAlias,
}


// !==================================================
// !                  User part
// !==================================================

const newEmailScheme = Joi.object({
    domain: Joi.string(),
    email: Joi.string(),
    password: Joi.string()
});

async function removeUser(req, res) {
    const result = Joi.validate(req.body, newEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.deleteUser(result.value.email);

    return res.json({ success: true, email });
}

async function getUser(req, res) {
    const result = Joi.validate(req.body, newEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.getUsers();

    return res.json({ success: true, email });
}

async function changeUser(req, res) {

    const result = Joi.validate(req.body, newEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }
    let email = await Email.updateUser(result.value);
    return res.json({ success: true, email});
}

async function insertUser(req, res) {
    const result = Joi.validate(req.body, newEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.insertUser(result.value.domain, result.value.email, result.value.password);

    return res.json({ success: true, email });
}



// !==================================================
// !                  Domain part
// !==================================================

const domainScheme = Joi.object({
    domain: Joi.string()
});



async function removeDomain(req, res) {
    const result = Joi.validate(req.body, domainScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.deleteDomain(result.value.domain);

    return res.json({ success: true, email });
}

async function getDomain(req, res) {
    const result = Joi.validate(req.body, domainScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.getDomains();

    return res.json({ success: true, email });
}

async function changeDomain(req, res) {

    const result = Joi.validate(req.body, domainScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }
    let email = await Email.updateDomain(result.value);
    return res.json({ success: true, email});
}

async function insertDomain(req, res) {

    const result = Joi.validate(req.body, domainScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.insertDomain(result.value.domain);

    return res.json({ success: true, email });
}



// !==================================================
// !                  Aliases part
// !==================================================

const aliasScheme = Joi.object({
    domain: Joi.string(), 
    source: Joi.string(), 
    destination: Joi.string() 
});

async function removeAlias(req, res) {
    const result = Joi.validate(req.body, aliasScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.deleteAliases(result.value.source);

    return res.json({ success: true, email });
}

async function getAlias(req, res) {
    const result = Joi.validate(req.body, aliasScheme);

    if (result.error) { 
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.getAliases();

    return res.json({ success: true, email });
}

async function changeAlias(req, res) {

    const result = Joi.validate(req.body, aliasScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }
    let email = await Email.updateAliases(result.value);
    return res.json({ success: true, email});
}

async function insertAlias(req, res) {

    const result = Joi.validate(req.body, aliasScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await Email.insertAliases(result.value.domain, result.value.source, result.value.destination);

    return res.json({ success: true, email });
} 
