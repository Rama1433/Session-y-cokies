var express = require('express');
var router = express.Router();
const {register, procesos } = require ('../controllers/mainController')
const {principal, olvidar} = require ('../controllers/userController')
const validaciones = require('../validation/validations')

/* GET home page. */
router
.get('/',register)
.post('/', validaciones, procesos)
.get('/home', principal)
.get('/olvidar', olvidar)
module.exports = router;
