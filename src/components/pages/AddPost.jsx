import React from 'react'
import PostForm from "../post-form/PostForm"
import Container from "../container/Container"
function AddPost() {
  return (
    <div className='py-8 min-h-[100vh]'>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost