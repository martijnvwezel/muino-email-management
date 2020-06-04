'use strict';
const express = require('express');
const passport = require('passport');
const emailCtrl = require('../controllers/email.controller');
const admin = require('../middleware/require-admin');

const router = express.Router();
module.exports = router;

// * User part
router.delete('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.removeUser); 
router.get('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.getUser); 
router.post('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.insertUser);
router.put('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.changeUser);

// * Domain part
router.delete('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.removeDomain); 
router.get('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.getDomain); 
router.post('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.insertDomain);
router.put('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.changeDomain);

// * Alias part
router.delete('/alias', passport.authenticate('jwt', { session: false }), admin, emailCtrl.removeAlias); 
router.get('/alias', passport.authenticate('jwt', { session: false }), admin, emailCtrl.getAlias); 
router.post('/alias', passport.authenticate('jwt', { session: false }), admin, emailCtrl.insertAlias);
router.put('/alias', passport.authenticate('jwt', { session: false }), admin, emailCtrl.changeAlias);













