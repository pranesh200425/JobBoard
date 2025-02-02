import React from 'react'

const Board = () => {
  return (
    <div className='flex flex-col w-full mt-6 mb-6 items-center' >
        <div id="heading" className='flex w-full pl-6' >
            <h1 className='flex text-[2rem] font-bold' >SAVED JOBS</h1>
        </div>
        <div id="board-con" className='flex flex-col w-full items-center mt-4 mb-4'>
            <div className="board flex flex-col w-5/6 rounded-2xl bg-[#f5f5f5] p-4 shadow-[inset_6px_4px_23px_-4px_rgba(54,221,48,0.4)]">
                <div className="upper flex w-full h-10  justify-between items-center">
                    <div className="role flex w-3/6 justify-start items-center">
                        <div id="icon" className='flex pr-2 text-[#36dd30] text-xl' ><i class="fa-solid fa-briefcase"></i></div>
                        <div className="rolename"><p className='font-bold text-[#36dd30]' >Software Developer</p></div>
                    </div>
                    <div className="company w-3/6 flex justify-center items-center">
                        <div className="compicon flex pr-2 text-[#36dd30] text-xl"><i class="fa-solid fa-building"></i></div>
                        <div className="compname font-bold text-[#36dd30]"><p>Apple inc.</p></div>
                    </div>
                </div>
                <div className="lower flex w-full h-10 justify-between items-center">
                    <div className="salary flex w-3/6  justify-start items-center">
                        <div className="salicon flex pr-2 text-[#36dd30] text-xl"><i class="fa-solid fa-money-bill"></i></div>
                        <div className="sal font-bold text-[#36dd30]"><p>100,000</p></div>
                    </div>
                    <div className="location w-3/6 flex justify-center items-center">
                        <div className="locicon flex pr-2 text-[#36dd30] text-xl"><i class="fa-solid fa-location-dot"></i></div>
                        <div className="loc font-bold text-[#36dd30]"><p>San Francisco</p></div>
                    </div>
                </div>
                <div className="view-btn flex justify-center items-center w-full ">
                    <button className='bg-transparent border-none underline text-[#249421] hover:text-[#249421]'>view</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Board