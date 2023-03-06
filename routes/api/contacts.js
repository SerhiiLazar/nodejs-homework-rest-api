const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/contacts');

const { validationBody } = require('../../middlewares');

const schemas = require('../../schemas/contactSchema');

router.get('/', ctrl.getContact);

router.get('/:id', ctrl.getContactById);

router.post('/', validationBody(schemas.addSchema), ctrl.add);

router.delete('/:id', ctrl.remove);

router.put('/:id', validationBody(schemas.addSchema), ctrl.update);

module.exports = router;
