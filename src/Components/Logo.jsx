import React from 'react'

const Logo = () => {
  return (
    <div className='flex w-full h-24 items-center justify-center' >
        <div className="logo flex justify-center items-center w-1/4 h-full ">
            <h1 className='bg-gradient-to-r from-[#BCFCB9] to-[#0D8207] inline-block text-transparent bg-clip-text' >JobBoard.io</h1>
        </div>
        <div className="tagline flex justify-center items-center w-3/4 h-full">
            <p className='text-2xl' >Save you job applications in one place</p>
        </div>
    </div>
  )
}

export default Logo