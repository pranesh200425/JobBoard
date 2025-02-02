import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-col w-full  items-center justify-center' >
        <div className="logo flex justify-center items-center w-3/6 h-full ">
            <h1 className='bg-gradient-to-r from-[#BCFCB9] to-[#0D8207] inline-block text-transparent bg-clip-text' >JobBoard.io</h1>
        </div>
        <div className="tagline flex justify-center items-center w-3/4 h-full">
            <p className='text-2xl opacity-45 text-center ' >Save your job applications in one place</p>
        </div>
    </div>
  )
}

export default Logo