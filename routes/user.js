const express = require('express');
const { createUser, getAllUsers, getSingleUser, updateUser, deleteUser } = require("../controller/UserControllers");

const router = express.Router();

router.post('/createUser',createUser);
router.put('/updateUser/:id',updateUser);
router.get('/users',getAllUsers);
router.get('/user/:id',getSingleUser);
router.delete('/deleteUser/:id',deleteUser);

module.exports = router