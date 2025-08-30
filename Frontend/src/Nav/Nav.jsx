import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const user=useSelector((state)=> state.user.user)
  console.log(user);
 


  const clickHandle=()=>{
    setisOpen(false)
  }

  return (
    <div className="">
      <div className="absolute right-10">
        <button className="relative md:hidden" onClick={() => setisOpen(!isOpen)}>
          {isOpen ? <X size={45} /> : <Menu size={45} />}
        </button>

        {isOpen && (
          <div className="relative grid">

            {user
            ?
            <>
            <NavLink onClick={clickHandle} className={(e)=> e.isActive && "text-emerald-500" } to={"/home"}>Home</NavLink>
            
            <NavLink onClick={clickHandle} className={(e)=> e.isActive && "text-emerald-500" } to={"/settings"}>setting</NavLink>


            </>
            :
            <>
            <NavLink onClick={clickHandle} className={(e)=> e.isActive && "text-emerald-500" } to={"/"}>Home</NavLink>

            <NavLink onClick={clickHandle} className={(e)=> e.isActive && "text-emerald-500" } to={"/login"}>Login</NavLink>


            </>
          }
            
          </div>
        )}
      </div>


        <div className="hidden md:flex justify-center items-center gap-6">
          {
            user
            ?
            <>
            <NavLink onClick={clickHandle} className={(e)=> e.isActive && "text-emerald-500" } to={"/"}>Home</NavLink>

            <NavLink  to={"/settings"} className={(e)=> e.isActive && "text-emerald-500" }>setting</NavLink>


            </>
            :
            <>
             <NavLink onClick={clickHandle} className={(e)=> e.isActive && "text-emerald-500" } to={"/"}>Home</NavLink>

            <NavLink  to={"/login"} className={(e)=> e.isActive && "text-emerald-500" }>Login</NavLink>

           
            </>
          }
     
      
        </div>
    </div>
  );
};

export default Nav;
