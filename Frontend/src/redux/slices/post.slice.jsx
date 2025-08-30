import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers:{
    loadpost:(state,actions)=>{
        state.posts=actions.payload;
        
    }
  }
 
})


export const {loadpost} = postSlice.actions

export default postSlice.reducer