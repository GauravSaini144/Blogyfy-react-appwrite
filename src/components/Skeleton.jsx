import React from 'react'

function Skeleton() {
  return (
    <div className=' w-full max-w-[300px] h-[250px] bg-gray-50 rounded-xl p-4'>
        <div className='w-full rounded-xl justify-center mb-4 h-3/4  bg-gray-200'>
           <div className=''>
            
             </div>
        </div>
        <div className='text-xl w-full rounded-lg bg-gray-200 h-1/6 font-bold'>
         <div>
     
         </div>
        </div>
      </div>
  )
}

export default Skeleton