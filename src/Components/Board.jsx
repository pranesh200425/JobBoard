import React from 'react'

const Board = () => {
  return (
    <div className='flex flex-col w-full mt-6 mb-6'>
        <div id="heading" className='flex w-full pl-6' >
            <h1 className='flex text-[2rem] font-bold' >SAVED JOBS</h1>
        </div>
        <div id="board" className='flex flex-col w-full mt-4 mb-4'>
            <div id="board-head" className='flex flex-col w-full' >
                <table className='flex flex-col w-full' >
                    {/* <thead className='flex flex-col w-full' >
                        <tr className='flex justify-around items-center bg-lime-700 text-white h-12' >
                            <th>Position</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead> */}
                    <tbody className = 'flex flex-col w-full font-bold'  >
                        <tr className = 'flex justify-around items-center  pt-4 pb-4' >
                            <td className='text-lg text-lime-500' >Software Developer</td>
                            <td>Apple</td>
                            <td>Tirupur</td>
                            <td> <button className='flex border-none bg-transparent underline text-slate-600' > View </button> </td>
                        </tr>
                        <tr className='flex justify-around pt-4 pb-4' >
                            <td>Software Engineer</td>
                            <td>Google</td>
                            <td>Tirupur</td>
                            <td>View</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Board