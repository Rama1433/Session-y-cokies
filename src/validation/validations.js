const {check,body} = require ('express-validator');
const {loadUsers} = require ('../data/db_modules');


module.exports = [

    check('name')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({
            min:2,
            max:10
        }).withMessage('Debes ingresar entre 2 y 10 caracteres').bail()
        .isAlpha('es-ES').withMessage('No puedes exeder los 10 caracteres'),

    body('email')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Correo invalido')
        .custom((value,{req})=> {
            const user = loadUsers().find(user => user.email === value)
            if (user){
                return false
            } else {
                return true
            }
        }).withMessage('El Correo ya se encuentra registrado')
     ]

