import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    loaduser:(state,actions)=>{
        state.user=actions.payload;
        
    },
    clearuser:(state,action)=>{
          state.user=null
    }
  }
 
})


export const {loaduser,clearuser} = userSlice.actions

export default userSlice.reducer