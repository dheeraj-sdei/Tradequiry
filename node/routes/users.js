
var express = require('express');
const user = require('../api/user.api');

const usersRouter = express.Router();

usersRouter.post('/login', user.loginUser);
usersRouter.post('/createUser',user.createUser);
usersRouter.get('/loadUser/:id',user.loadUser);
usersRouter.post('/updateUser',user.updateUser);
usersRouter.post('/forgotPassword', user.forgotPassword);
usersRouter.post('/changePassword', user.changePassword);
module.exports = usersRouter;