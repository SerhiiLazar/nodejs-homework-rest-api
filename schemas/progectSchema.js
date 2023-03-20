const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.string().min(7).max(16).required(),
  favorite: Joi.boolean()
});

const contactFaforite = Joi.object({
  favorite: Joi.boolean().required(),
})

const shema = {
  contactSchema,
  contactFaforite
}

module.exports = {
  shema,
};
