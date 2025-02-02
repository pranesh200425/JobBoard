import React from 'react'

const ConBoard = () => {
  return (
    <>
    <div className="board flex flex-col lg:w-full w-5/6 rounded-2xl bg-[#f5f5f5] p-4 shadow-[inset_6px_4px_23px_-4px_rgba(54,221,48,0.4)] mt-2 mb-2 ">
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
                <div className="lower flex w-full h-10 justify-around items-center">
                    <div className="salary flex w-1/3  justify-start items-center">
                        <div className="salicon flex pr-2 text-[#36dd30] text-xl"><i class="fa-solid fa-money-bill"></i></div>
                        <div className="sal font-bold text-[#36dd30]"><p>100,000</p></div>
                    </div>
                    <div className="location w-1/3 flex justify-center items-center">
                        <div className="locicon flex pr-2 text-[#36dd30] text-xl"><i class="fa-solid fa-location-dot"></i></div>
                        <div className="loc font-bold text-[#36dd30]"><p>San Francisco</p></div>
                    </div>
                    <div className='w-1/3 flex justify-center items-center' >
                        <div className="platicon pr-2 text-[#36dd30] text-xl"><i class="fa-brands fa-linkedin"></i></div>
                        <div className="platname font-bold text-[#36dd30]"><p>LinkedIn</p></div>
                    </div>
                </div>
                <div className="view-btn flex justify-center items-center w-full ">
                    <button className='bg-transparent border-none underline text-[#249421] hover:text-[#249421]'>view</button>
                </div>
            </div>
    </>
  )
}

export default ConBoard