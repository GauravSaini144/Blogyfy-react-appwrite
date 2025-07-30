import { createSlice } from "@reduxjs/toolkit";
import service from "../appwrite/config";
const initialState={
    loading:false,
    allPosts:[],
    error:null
}

const postSlice=createSlice({
name:'posts',
initialState,
reducers:{
   allPostRequest:(state, action)=>{
    state.loading=true
   },
   allPostSuccess:(state, action)=>{
    state.loading=false,
    state.allPosts=action.payload
   },
   allProductsFail:(state, action)=>{
    state.loading=false,
    state.error=action.payload
   },
   clearError:(state, action)=>{
    state.error=null
   }
}

})

export const {allPostRequest, allPostSuccess, allProductsFail, clearError} = postSlice.actions;
export default postSlice.reducer;