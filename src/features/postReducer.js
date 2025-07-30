import { allPostRequest, allPostSuccess, allProductsFail, clearError } from "./postSlice";
import service from "../appwrite/config";
export const getAllPosts=()=>async(dispatch)=>{
    try {
        
        dispatch(allPostRequest());
        const posts= await service.getAllPost();
        dispatch(allPostSuccess(posts.documents));

    } catch (error) {
        console.log(error);
        dispatch(allProductsFail(error.message));
    }

}

export const clearErrorMessage=()=>async(dispatch)=>{
    dispatch(clearError());
}