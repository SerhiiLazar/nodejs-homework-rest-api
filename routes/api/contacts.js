const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers');

const { validationBody, isValidId } = require('../../middlewares');

const {schemas} = require('../../schemas');

router.get('/', ctrl.getContact);

router.get('/:id', isValidId, ctrl.getContactById);

router.post('/', validationBody(schemas.contactSchema), ctrl.add);

router.delete('/:id', isValidId, ctrl.remove);

router.put('/:id', isValidId, validationBody(schemas.contactSchema), ctrl.update);

router.patch('/:id/favorite', isValidId, validationBody(schemas.contactFaforite), ctrl.updateFavorite);

module.exports = {router};
