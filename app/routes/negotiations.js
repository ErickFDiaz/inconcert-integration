const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const {createItems} = require('../controlles/negotiations')
const { validateCreate } = require('../validators/negotiations')

//router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

//router.get('/:id', checkOrigin, getItem)

//TODO: Donde recibimos data
router.post('/', checkAuth,checkRoleAuth(['user','admin']),validateCreate, createItems)

//router.patch('/:id', updateItem)

//router.delete('/:id', deleteItem)


module.exports = router