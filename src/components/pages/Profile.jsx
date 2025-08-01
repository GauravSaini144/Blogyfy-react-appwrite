import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config';
import { Query } from 'appwrite';
import { useSelector } from 'react-redux';
import Container from '../container/Container';
import PostCard from "../PostCard.jsx"
function Profile() {

    const [posts, setPosts]=useState([]);
    const {userData}=useSelector((state)=>state.auth);
    const [loading, setLoading]=useState(true);
        useEffect(()=>{
                 
            service.getAllPost([Query.equal("userId", userData.$id)]).then((data)=>{setPosts(data.documents);setLoading(false)}).finally(()=>setLoading(false));
        },[posts, userData]);
        console.log(posts);

  return (
    <Container>
      { userData?<>

  <div className="w-full min-h-screen  py-10 ">
  <div className="max-w-2xl mx-auto bg-white rounded-md md:rounded-2xl shadow-md p-2 md:p-6 sm:p-8">
    <div className="text-center border-b pb-6 mb-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
        👤 Profile
      </h1>
    </div>

    <div className="space-y-0 md:space-y-6 text-gray-700 text-base sm:text-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4">
        <span className="font-medium">User Name:</span>
        <span className="mt-1 sm:mt-0 text-right text-gray-600">
          {userData.name}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4">
        <span className="font-medium">Email:</span>
        <span className="mt-1 sm:mt-0 text-right text-gray-600">
          {userData.email}
        </span>
      </div>
    </div>
  </div>



  <div className='mt-20'>
    <div className='text-center mb-2'><h1 className='text-xl'>My Blogs</h1></div>
    <hr />
    <div >
{loading?<div className='text-center mt-12'><h1 className='text-lg text-gray-800'>Loading...</h1></div>:<>{
  posts.length>0?<div className='flex flex-wrap gap-2 mt-6'>
           {
            posts.map((post)=>{
              return <div key={post.$id} className='relative ' >
               <div className={post.status==="active"?'absolute top-0 right-0 bg-green-100 px-4 py-4 rounded-bl-2xl rounded-tl-xl z-50 ':'absolute top-0 right-0 bg-red-100 px-4 py-4 rounded-bl-2xl rounded-tl-xl z-50 '} > <h1 className={post.status==="active"?'md:text-lg text-green-600 font-semibold':'md:text-lg text-red-600 font-semibold'} >{post.status}</h1></div>
                <PostCard post={post} showUserName={false}/>
              </div>
            })
           }
  </div>:<div className='text-center mt-12'><h1 className='text-3xl text-gray-400'>No Blog posted yet</h1></div>
}</>}
    </div>

  </div>
</div></>:<div className='text-center mt-12'><h1 className='text-lg text-gray-800'>Loading...</h1></div>

}
    </Container>
  )
}

export default Profile