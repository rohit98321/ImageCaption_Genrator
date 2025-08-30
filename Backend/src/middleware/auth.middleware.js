const jwt=require("jsonwebtoken")
const userModel=require("../models/user.model")
const authmiddleware = async (req,res,next)=>{

    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"token not found"
        })
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        const user=await userModel.findOne({
            _id:decoded.id
        })

        req.user=user
        next()

        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message:"invalid token"
        })
        
        
    }





}

module.exports=authmiddleware

