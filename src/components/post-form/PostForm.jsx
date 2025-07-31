import React, {useCallback, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import Button from "../Button"
import Input from "../Input"
import Select from "../Select"
import RTE from '../RTE'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../Loader'


function PostForm({post}) {
    const [loading, setLoading]=useState(false);
    
    const {register, handleSubmit,  setValue, control, getValues } =useForm({
        defaultValues:{
            title:post?.title || '',
            content:post?.content || '',
            status:post?.status || 'active',

        },
    })

    const navigate= useNavigate();
    const userData=useSelector((state) => state.auth.userData);
   
    const submit  = async(data)=>{
        setLoading(true);
        if(post){
                 
            let file;
            if(data.image[0]){
                file=await service.uploadFile(data.image[0]);
                if(file && post.featuredImage){
                    await service.deleteFile(post.featuredImage);
                }
            }
         
         
         
         const dbPost = await service.updatePost(post.$id,{
            ...data,
            featuredImage:file?file.$id :post.featuredImage,
            
         })
         if(dbPost){
            setLoading(false);
            
            
                            navigate(`/post/${dbPost.$id}`);

            
         }
        }
        else{
            const file = data.image[0]? await service.uploadFile(data.image[0]):null;

            if(file){
                const fileId=file.$id;
                data.featuredImage=fileId;
              const dbPost = await service.createPost({
                    ...data,
                    userId:userData.userData.$id,
                    
                })

                if(dbPost){
                    setLoading(false);
                    navigate(`/post/${dbPost.$id}`);
                }
               
            }
            else{
                setLoading(false);
            }
        }
    }  

   

 


  return (
    <>
    { loading?<div className='h-[100vh]'><Loader/></div>:<> 
        <div className='text-center my-6'> <h1 className='text-3xl'>{post?"Edit Blog":"Post a Blog"}</h1></div>
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>

     <div className='w-full md:w-2/3 px-2'>
       
       <Input 
        label="Title: "
        placeholder="Enter a title"
        className="mb-4"
        {...register("title",{
            required:true
        })}
       />

       

       <RTE 
        label="Content: " name="content"
        control={control} defaultValue={getValues("content")}
       />
 
     </div>

     <div className='w-full md:w-1/3 px-2'>

      <Input
       label="Featured Image: "
       type="file"
       className="mb-4"
       accept="image/png, image/jpg, image/jpeg, image/gif"
       {...register("image", {
        required:!post,
       })}
      />

      {post && (
        <div className='w-full mb-4'>
           
           <img src={service.filePreview(post.featuredImage)}
           
           alt={post.title}
           className='rounded-lg' 
           />
        </div>
      )}

      <Select options={["active","inactive"]} 
       label="Status"
       className="mb-4"
       {...register("status",{
        required:true
       })}
      />

      <Button className='w-full'
      type='submit'
      bgColor={post?"bg-green-500":undefined}
      > 
        {post?"Update":"Submit"}
      </Button>
    
     </div>
    
    </form>
    </>
    }
    
    </>
  )
}

export default PostForm