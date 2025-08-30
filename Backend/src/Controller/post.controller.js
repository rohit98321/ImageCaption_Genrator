const postModel=require("../models/post.model")
const generateCaption=require("../service/ai.service")
const uploadFile =require("../service/storage.service")
const {v4: uuidv4} =require("uuid")


const postController=async (req,res)=>{
    const file=req.file

    console.log( "file data",file);


        //image converted into base64Image here
    const base64Image= Buffer.from(file.buffer).toString("base64")

    const caption= await generateCaption(base64Image)
    const imageUrl= await uploadFile(file.buffer,`${uuidv4()}`)
    
   
    const post =await postModel.create({
        caption:caption,
        image:imageUrl.url,
        user:req.user._id
    })

    res.status(201).json({
        message:"posted",
        post
    })
    
}

const listController =async (req,res)=>{

   

    try {

        const list= await postModel.find()
        res.status(200).json({
            message:"all data fetched",
            list
        })
        
    } catch (error) {
        console.log(error);
        
    }



}

module.exports={
    postController,
    listController
}