const   {GoogleGenAI} =require("@google/genai");

const ai = new GoogleGenAI({});

const  generateCaption= async (base64ImageFile)=>{


    const contents=[
        {
            inlineData:{
                mimeType:"image/jpeg",
                data:base64ImageFile,
            },
        },
        {text:"caption this image."}
    ]

    const response=await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:contents,
        config:{
            systemInstruction: `
            You are an expert in generating captions for images.
            You generate single caption for the image.
            Your caption should be short and concise.
            You use hashtag and emojis in caption.
            
            `
        }
    })
    return response.text
}


module.exports= generateCaption


