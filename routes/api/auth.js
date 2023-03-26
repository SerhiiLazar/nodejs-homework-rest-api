const express = require('express');

const ctrl = require('../../controllers')

const {validationBody, authenticate, upload} = require("../../middlewares");

const { userSchema } = require("../../schemas");

const router = express.Router();



//signup
router.post("/register", validationBody(userSchema.registerSchema), ctrl.registerUser);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validationBody(userSchema.emailSchema), ctrl.resendVerifyEmail);
//signin
router.post("/login", validationBody(userSchema.loginSchema), ctrl.loginUser);

router.post("/logout", authenticate, ctrl.logoutUser);

router.get("/current", authenticate, ctrl.currentUser);

router.patch('/users', authenticate, ctrl.updateSubscriptionUser);

router.patch('/avatars', authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;