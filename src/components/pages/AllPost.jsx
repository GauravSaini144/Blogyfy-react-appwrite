import React, {useState, useEffect} from 'react'
import PostCard from '../PostCard'
import { useNavigate } from 'react-router-dom'
import service from '../../appwrite/config'
import Container from '../container/Container'
import Skeleton from "../Skeleton";
import {useDispatch, useSelector} from "react-redux"
import { getAllPosts, clearErrorMessage } from '../../features/postReducer'
function AllPost() {
    const [posts, setPosts]=useState([]);
    const dispatch=useDispatch();
    const {loading, allPosts, error} = useSelector((state)=>state.posts);
    useEffect(()=>{
        dispatch(getAllPosts());
    },[dispatch])
    useEffect(()=>{

        if(allPosts){
            setPosts(allPosts);
        }

    },[allPosts]);

    useEffect(()=>{
        if(error){
            console.log(error);
        }

        dispatch(clearErrorMessage());
    },[error, dispatch])
    
  return (<>
    <div className=' py-8 min-h-[100vh]  '>
        
        <div className='text-center mb-6 md:mb-12'> <h1 className='text-3xl'>Recent Blogs</h1></div>
        <Container>
            <div className=' flex flex-wrap gap-2 justify-center' >

                {
                    !loading && posts.length>0? posts.map((post)=>(
                        <div key={post.$id} className='' >
                            <PostCard post={post} />
                        </div>
                    )): 
                    <div className='flex flex-wrap w-full justify-center '>
                          
                         <Skeleton/> 
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                           <Skeleton/>
                    </div>
                }
            </div>
        </Container>

    </div>
    </>
  )
}

export default AllPost