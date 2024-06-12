const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/users')
const { validateCreate } = require('../validators/users')

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id', checkOrigin, checkRoleAuth(['admin']), getItem)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, checkRoleAuth(['admin']), createItem)

router.patch('/:id', checkRoleAuth(['admin']), updateItem)

router.delete('/:id', checkRoleAuth(['admin']), deleteItem)


module.exports = router