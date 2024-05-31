const { checkSchema } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
    checkSchema({
        'data': {
            in: ['body'],
            isArray: {
                errorMessage: 'Data debe contener un array de objetos válido'
            },
            custom: {
                options: (value) => {
                    if (!Array.isArray(value)) {
                        throw new Error('Data debe contener un array de objetos válido');
                    }
                    return true;
                }
            }
        },
        'data.*.idGestion': {
            in: ['body'],
            isInt: {
                errorMessage: 'idGestion debe ser un número entero'
            },
            toInt: true
        },
        'data.*.fileName': {
            in: ['body'],
            isString: {
                errorMessage: 'fileName debe ser una cadena de caracteres'
            },
            notEmpty: {
                errorMessage: 'fileName no debe estar vacío'
            }
        }
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = { validateCreate };