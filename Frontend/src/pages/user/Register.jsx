import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { asyncUserRegister } from '../../redux/actions/userAtion'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"


const Register = () => {

    const {register,reset,handleSubmit}=useForm()
    const dispatch=useDispatch()


    const registerHandler = (user)=>{

      console.log(user);
      dispatch(asyncUserRegister(user))

    }


  return (
    <div className='flex justify-center items-center  h-screen w-full '>

        <form 
        onSubmit={handleSubmit(registerHandler)}
        className='grid p-5 gap-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3'>

            <input className='border-b outline-0 py-2 w-full' {...register("username")} type="text" placeholder='Username' />


            <input className='border-b outline-0 py-2 w-full' {...register("password")} type="text" placeholder='password' />

            <motion.button
           type='submit'
        className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 350 }}
      >
        Register 
      </motion.button>
            
            <Link className="mx-auto" to={"/login"} > already have an account <span className="text-blue-700">Login</span></Link>

        </form>
    </div>
  )
}

export default Register