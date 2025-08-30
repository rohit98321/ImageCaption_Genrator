import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../slices/user.slice"
import postReducer from "../slices/post.slice" 

export const store = configureStore({
  reducer: {
    user:userReducer,
    post:postReducer,
  },
})