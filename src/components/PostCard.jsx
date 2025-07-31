import React from 'react'
import service from '../appwrite/config'
import {Link} from "react-router-dom"
function PostCard({post}) {
  return (
    <Link to={`/post/${post.$id}`}>
<div className=" ms:w-full  w-[300px] h-[350px]  min-h-fit bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
        <div className='w-full justify-center mb-4 h-2/3 overflow-hidden rounded-tr-xl rounded-tl-xl border-2'>
            <img  src={service.filePreview(post.featuredImage)} loading='lazy'  alt={post.title} 
            className='  w-full  h-full  object-cover hover:scale-105 transition-transform duration-200  '
            />
        </div>
        <div className='px-2 py-2 md:px-4 md:py-2 hover:text-blue-500'>
        <h2 className='text-lg md:text-xl font-bold overflow-hidden text-ellipsis line-clamp-3'>
      {post.title}
        </h2></div>

        
      </div>
    </Link>
  )
}

export default PostCard