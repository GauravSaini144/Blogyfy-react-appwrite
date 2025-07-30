import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import PostForm from '../post-form/PostForm'
import { useParams, useNavigate } from 'react-router-dom'
import service from '../../appwrite/config';
import Button from '../Button';
function EditPost() {
    const navigate=useNavigate();
    const [post, setPost]=useState(null);
    const {slug}=useParams();

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
                
                
            })
        }else{
                    navigate("/");
                }
    },[slug, navigate])
  return  post?(<div>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>):(
            <div>
                <h1>Something Went Wrong</h1>
                <Button onClick={()=>navigate("/")} >Go to Home</Button>
            </div>
        )
    
  
}

export default EditPost