const jwt=require("jsonwebtoken")
const userModel=require("../models/user.model")
const bcrypt =require("bcrypt")



//register
 const registerController = async (req , res)=>{

    const {username,password}=req.body

    const isUserExist=await userModel.findOne({
        username
    })

    if(isUserExist) return res.status(409).json({message:"user already exist"})


        const user=await userModel.create({
            username,
            password: await bcrypt.hash(password,10)
        })

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(201).json({
            message:"user registered successfully",
            user
        })

}

//login
const loginController = async (req,res)=>{
    const {username,password}=req.body

    const user =await userModel.findOne({
        username
    })

    if(!user){
        return res.status(409).json({
            message:"user not registers"
        })
    }


    const ispassword= await bcrypt.compare(password ,user.password)

    if(!ispassword){
        return res.status(409).json({
            message:"password not match"
        })
    }

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token,{
        httpOnly: true,
        secure: true,              // Required for HTTPS (which Render uses)
        sameSite: "None",          // Required for cross-site cookies
        maxAge: 7 * 24 * 60 * 60 * 1000 // Optional: 7 days
    })

    res.status(200).json({
        message:"user loggedin successfully",
        user
    })
}

//profile
const profileController =async (req,res)=>{
    const token = req.cookies.token;
    
    if (!token) return res.status(401).json({ message: "Unauthorized" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      const user = await userModel.findById(decoded.id);
      res.status(200).json({ user });
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
}


const logoutController =async (req,res)=>{
   res.clearCookie("token")
   res.status(200).json({
    message:"user loged out"
    
   })
}




module.exports={
    registerController,
    loginController,
    profileController,
    logoutController
}



