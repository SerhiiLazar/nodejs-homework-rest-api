const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers');

const { validationBody, isValidId, authenticate } = require('../../middlewares');

const { shema } = require('../../schemas');

router.get('/', authenticate, ctrl.getContact);

router.get('/:id', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validationBody(shema.contactSchema), ctrl.add);

router.delete('/:id', authenticate, isValidId, ctrl.remove);

router.put('/:id', authenticate, isValidId, validationBody(shema.contactSchema), ctrl.update);

router.patch('/:id/favorite', authenticate, isValidId, validationBody(shema.contactFaforite), ctrl.updateFavorite);

module.exports = router;
