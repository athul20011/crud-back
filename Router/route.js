//import express
const express =require('express')

const userController =require('../controllers/userController')



//create a router object of express to define routes(paths)
const router =new express.Router

//using router object to define paths

//1-register API routes localhost
router.post('/register',userController.register)

//2-login API routes localhost
router.post('/login',userController.login)






module.exports = router 