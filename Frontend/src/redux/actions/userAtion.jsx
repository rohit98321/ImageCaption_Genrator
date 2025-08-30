import axios from "../../api/config"
import {toast} from "react-toastify"
import {loaduser,clearuser} from "../slices/user.slice"


export const asyncUserRegister = (user) =>  async (dispatch, getstate) => {

    try {
        
        const res= await axios.post("/auth/register",user,{ withCredentials: true })
        console.log(res);
            toast.success(res.data.message)

        } catch (error) {
            
            toast.error(error?.response?.data?.message || "register fail")
            console.log(error);
            
        }
        
    };
    
    
    export const asyncUserLogin =(user)=>async(dispatch,getstate)=>{
        
        try {
            
            const {data} = await axios.post("/auth/login",user,{ withCredentials: true })
            console.log(data.user);
            toast.success(data.message)
           
            dispatch(asyncGetUser())
           
            
            
            
        } catch (error) {
            
            toast.error(error?.response?.data?.message || "login fail")

        
    }

}

export const asyncGetUser=()=> async (dispatch,getstate)=>{


    const res = await axios.get("/auth/profile",{ withCredentials: true });
    console.log( "get user",res.data);
    dispatch(loaduser(res.data))
}


export const asyncUserLogout=()=>async(dispatch,getstate)=>{

        const res=await axios.get("/auth/logout")
        console.log(res.data);
        dispatch(clearuser())

}