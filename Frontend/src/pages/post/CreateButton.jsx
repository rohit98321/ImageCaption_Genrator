import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const CreateButton = () => {

    const navigate=useNavigate()
  return (
    <Link to={"/createpost"} >
    <motion.button
        className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        generate Caption
      </motion.button>
    </Link>
  )
}

export default CreateButton