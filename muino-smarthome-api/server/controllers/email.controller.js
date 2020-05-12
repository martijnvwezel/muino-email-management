'use strict';

const Joi = require('joi');
let Email = require('../models/email.model');

module.exports = {
    removeEmail,
    getEamil,
    changeEmail,
    insertEmail,

    removeDomain,
    getDomain,
    changeDomain,
    insertDomain,

    removeAliases,
    getAliases,
    changeAliases,
    insertAliases


}


// !==================================================
// !                  Email stuff
// !==================================================




const newEmailScheme = Joi.object({
  email: Joi.string(),
  password: Joi.string()
});


const changeEmailScheme = Joi.object({
    oldemail: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().allow('')
  });
  


// TODO Implement this function
async function removeEmail(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function getEamil(req, res) {

    const result = Joi.validate(req.body, newEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email =   Email.getAllEmail("1" );

    console.log('Email get all emails')
    
    console.log('res', email);
    


    return res.json({ success: true, email});
}

// TODO Implement this function
async function changeEmail(req, res) {

    const result = Joi.validate(req.body, changeEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    return res.json({ success: true });
}

// TODO Implement this function
async function insertEmail(req, res) {

    const result = Joi.validate(req.body, newEmailScheme);

    if (result.error) {
        return res.status(400).json({ success: false, result: result.error });
    }

    let email = await new newEmail_data(Result.value).save(); // TODO: mongodb to mysql

    return res.json({ success: true, email: email.email  });
}













// !==================================================
// !                  Domain stuff
// !==================================================

// TODO Implement this function
async function removeDomain(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function getDomain(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function changeDomain(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function insertDomain(req, res) {
    return res.json({ success: true });
}




// !==================================================
// !                  Aliases stuff
// !==================================================



// TODO Implement this function
async function removeAliases(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function getAliases(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function changeAliases(req, res) {
    return res.json({ success: true });
}

// TODO Implement this function
async function insertAliases(req, res) {
    return res.json({ success: true });
}

