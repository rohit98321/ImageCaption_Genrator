const express =require("express")
const router=express.Router()
const authmiddleware=require("../middleware/auth.middleware")
const {postController , listController}=require("../Controller/post.controller")
const multer =require("multer")


const upload=multer({storage:multer.memoryStorage()})

// /auth/posts [protected] {imagefile}

router.post("/",
authmiddleware,//req.user= user data using id cookie
upload.single("image"),
postController)


router.get("/list" ,listController)





module.exports=router