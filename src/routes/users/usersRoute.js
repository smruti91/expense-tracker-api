const express = require('express');
const { registeruser,fetchUserCtrl } = require('../../controllers/users/usersCtrl');

const userRoute = express.Router();

userRoute.post("/register", registeruser);
userRoute.get("/",fetchUserCtrl)
module.exports = userRoute;