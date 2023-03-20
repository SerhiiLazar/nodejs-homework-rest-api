const Joi = require('joi');
const {emailRegexp} = require('../models');


const registerSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string().required(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
})

const userSchema = {
    registerSchema,
    loginSchema
}
module.exports = {
    userSchema
}