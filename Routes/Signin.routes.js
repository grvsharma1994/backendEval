const { Router } = require('express');
const { signinUser } = require('../Controller/Signin.controller');
const SigninRouter = Router();
SigninRouter.post('/user', signinUser())
module.exports = {
    SigninRouter
}