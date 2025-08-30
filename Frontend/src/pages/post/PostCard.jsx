import React from 'react'
import { motion } from "framer-motion";

const PostCard = ({post}) => {
  return (
    <motion.div
    className="w-96 rounded-lg shadow-md overflow-hidden bg-white"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      src={post.image}
      alt="Postcard"
      className="w-full h-60 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-800">
      {post.caption}
      </h2>
      
    </div>
  </motion.div>
  )
}

export default PostCard