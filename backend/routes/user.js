const express = require('express');
const router =express.Router();
const usercontroller = require('../controllers/user')

router.post('/adduser', usercontroller.addUser)
router.get('/getusers',usercontroller.getusers)

router.delete('/deleteuser/:id',usercontroller.deleteUser)
module.exports=router;