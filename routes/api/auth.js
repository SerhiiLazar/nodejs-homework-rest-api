const express = require('express');

const ctrl = require('../../controllers')

const {validationBody, authenticate} = require("../../middlewares");

const { userSchema } = require("../../schemas");

const router = express.Router();



//signup
router.post("/register", validationBody(userSchema.registerSchema), ctrl.registerUser);

//signin
router.post("/login", validationBody(userSchema.loginSchema), ctrl.loginUser);

router.post("/logout", authenticate, ctrl.logoutUser);

router.get("/current", authenticate, ctrl.currentUser);

router.patch('/users', authenticate, ctrl.updateSubscriptionUser);


module.exports = router;