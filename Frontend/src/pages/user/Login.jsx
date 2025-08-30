import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncUserLogin } from "../../redux/actions/userAtion";
import {motion} from "framer-motion"

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (user) => {
    dispatch(asyncUserLogin(user));
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center  h-screen w-full ">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="grid p-5 gap-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
      >
        <input
          className="border-b outline-0 py-2 w-full"
          {...register("username")}
          type="text"
          placeholder="Username"
        />

        <input
          className="border-b outline-0 py-2 w-full"
          {...register("password")}
          type="text"
          placeholder="password"
        />

        <motion.button
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.5 }}
          transition={{ type: "spring", stiffness: 350 }}
        >
          Login
        </motion.button>
        <Link className="mx-auto" to={"/register"}>
          {" "}
          don't have an account <span className="text-blue-700">register</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
