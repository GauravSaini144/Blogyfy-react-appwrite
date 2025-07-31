import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import service from '../../appwrite/config'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from '../Button'
import { useSelector } from 'react-redux'
import DOMPurify from "dompurify"
import Loader from '../Loader'
function Post() {
    const [post, setPost]=useState(null);
    const {slug} = useParams();
    const userData=useSelector((state)=>state.auth.userData);
    const navigate=useNavigate();
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                    setLoading(false);
                }else{
            navigate("/");
        }
                
            })
        }
        else{
            navigate("/");
        }
    },[slug, navigate])

    const isAuther=post && userData ? post.userId === userData.userData.$id :false;

    const deletePost=()=>{
        service.deletePost(post.$id).then((status)=>{
            if(status){
                service.deleteFile(post.featuredImage);
                navigate("/all-post");
            }
        })
    }
  return (
    <>{
    loading?<Loader/>:<>
    { 
        post?<div className='py-8 px-2'>

            <Container>
                <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2 bg-gray-50'>
                    <img src={service.filePreview(post.featuredImage)} alt={post.title} className='rounded-xl h-[400px] ' loading='lazy' />
                    {
                        isAuther &&(
                            <div className='absolute right-6 top-6'>
                                <Link to={`/edit-post/${post.$id}`} >
                                <Button bgColor="bg-green-500" className='mr-3'>
                                    Edit 
                                    
                                    </Button></Link>
                                    <Button bgColor="bg-green-500" onClick={deletePost}>
                                        Delete
                                    </Button>
                            </div>
                        )
                    }
                </div>
                <div className='w-full mb-6'>

                    <h1 className='text-2xl font-bold'>{post.title}</h1>

                </div>
                <div
                    className=''
                     dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />

            </Container>
        </div>:null
    }</>
}</>
  )
}

export default Post