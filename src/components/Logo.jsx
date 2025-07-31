import React from 'react'
import Blogify from "../assets/Blogify.png"
function Logo() {
  return (
    <div>
      <img className='w-[100px] outline-none' src={Blogify} alt="Blogify" />
    </div>
  )
}

export default Logo