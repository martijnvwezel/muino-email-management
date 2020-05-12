'use strict';
const express = require('express');
const passport = require('passport');
const emailCtrl = require('../controllers/email.controller');
const admin = require('../middleware/require-admin');

const router = express.Router();
module.exports = router;

// * user part
router.delete('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.removeEmail); 
router.get('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.getEamil); 
router.post('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.insertEmail);
router.put('/', passport.authenticate('jwt', { session: false }), admin, emailCtrl.changeEmail);

router.delete('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.removeDomain); 
router.get('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.getDomain); 
router.post('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.insertDomain);
router.put('/domain', passport.authenticate('jwt', { session: false }), admin, emailCtrl.changeDomain);

router.delete('/aliases', passport.authenticate('jwt', { session: false }), admin, emailCtrl.removeAliases); 
router.get('/aliases', passport.authenticate('jwt', { session: false }), admin, emailCtrl.getAliases); 
router.post('/aliases', passport.authenticate('jwt', { session: false }), admin, emailCtrl.insertAliases);
router.put('/aliases', passport.authenticate('jwt', { session: false }), admin, emailCtrl.changeAliases);













