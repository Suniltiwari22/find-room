const express = require("express");
const router = express.Router();

const passport = require("passport");

const passportLocalMongoose = require("passport-local-mongoose");

const User = require("../models/user.js");
const wrapAsync = require("../utills/wrapAsync.js");
const { saveRedirectUrl } = require("./middleware.js");

const userController=require("../controllers/user.js");


// SIGNUP PAGE
router.get("/signup",userController.renderSignup);

router.post("/signup",userController.signup);

router.get("/login", userController.renderLoginForm);

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.login
);


router.post("/login",saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: '/login',
    failureFlash: true,
}),
userController.renderLogin
);

router.get("/logout",userController.logOut);



module.exports = router;