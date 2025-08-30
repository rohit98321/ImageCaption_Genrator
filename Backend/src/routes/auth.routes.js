const express =require("express")
const {registerController,profileController,logoutController, loginController}=require("../Controller/auth.controller")


const router=express.Router()

router.post("/register", registerController)
router.post("/login", loginController)
router.get("/profile",profileController)
router.get("/logout",logoutController)






module.exports=router