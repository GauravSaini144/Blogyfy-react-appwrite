import React from 'react'
import service from '../appwrite/config'
import {Link} from "react-router-dom"
function PostCard({post, showUserName=true}) {
  return (
    <Link to={`/post/${post.$id}`}>
<div className=" ms:w-full  w-[300px] h-[320px]   bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
        <div className='w-full justify-center mb-2 h-2/3 overflow-hidden rounded-tr-xl rounded-tl-xl border-2'>
            <img  src={service.filePreview(post.featuredImage)} loading='lazy'  alt={post.title} 
            className='  w-full  h-full  object-cover hover:scale-105 transition-transform duration-200  '
            />
        </div>
                 { showUserName && <h1 className='px-1 '>Posted by: <span className='font-bold hover:text-blue-700'>{post.userName}</span></h1>}

        <div className='px-2 py-2 md:px-2 md: hover:text-blue-500'>
        <h2 className='text-lg md:text-xl font-bold overflow-hidden text-ellipsis line-clamp-2'>
      {post.title}
        </h2></div>

        
      </div>
    </Link>
  )
}

export default PostCard