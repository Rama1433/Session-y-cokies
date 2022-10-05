var express = require('express');
var router = express.Router();
const {register, procesos } = require ('../controllers/mainController')
const {principal,logout, olvidar} = require ('../controllers/userController')
const validaciones = require('../validation/validations')

router
.get('/',register)
.post('/', validaciones, procesos)
.get('/home', principal)
.get('/salir', logout)
.get('/olvidar', olvidar)
module.exports = router;
