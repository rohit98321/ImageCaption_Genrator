import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUserLogout } from '../../redux/actions/userAtion'
import { LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const data=useSelector((state)=>state.user.user)
  
  const logoutHandler=()=>{
    dispatch(asyncUserLogout())
    navigate("/login")
  }


   
  return (
    <div >
      <div>

    <button  onClick={logoutHandler}>
      
    <LogOut className='text-red-400' size={50} /> 
      </button>
      </div>


      <h1> User ---- {`>`} {data.user.username}</h1>
     
    </div>
  )
}

export default Logout