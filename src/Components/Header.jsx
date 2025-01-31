import React from 'react'
import Bubble from './Bubble'
const Header = () => {
  return (
    <div className='flex w-full bg-gradient-to-t from-[#0D8207] via-[#4BD843] to-[#AFFFAB] h-72 rounded-[2rem]' >
        <div id="bubbles" className='flex justify-center items-center relative h-full w-full ' >
        
            <Bubble style="absolute top-[10%] left-[2%]" width="20" height="20" r="8" />
            <Bubble style="absolute top-2 right-2" width="40" height="40" r="12" />
            <Bubble style="absolute top-[70%] left-[20%]" width="50" height="50" r="15" />
            <Bubble style="absolute top-6 " width="30" height="30" r="12" />
        
            <div id="input" className='flex w-3/4 shadow-[6px_7px_40px_10px_rgba(0,0,0,0.39)] items-center justify-center rounded-full' >
                <input type="text" className='flex w-full p-4 rounded-full'  placeholder='Please paste the link of the job you want to add' />
            </div>
        </div>
        
    </div>
  )
}

export default Header