  const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');

  const router = express.Router();
  //get
  router.get('/all-users',getAllUsers);
 //user create malpare

  router.post('/register', registerController);

  //login

  router.post('/login', loginController);


  module.exports = router