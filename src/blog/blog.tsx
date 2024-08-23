import React from 'react'
import BlogData from './data'

function Blog() {
  return (
    <div className='flex justify-center items-center flex-col gap-3'>
        {
            BlogData.map((data)=>{
                return(
                    <div className='mt-5 flex justify-center flex-col gap-3 bg-violet-600'>
                        <h1 className=''>{data.title}</h1>
                        <p>{data.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Blog