import React from 'react'
import ConBoard from './ConBoard'

const Board = () => {
  return (
    <div className='flex flex-col w-full mt-6 mb-6 items-center' >
        <div id="heading" className='flex w-full pl-6 pt-2 pb-2 sticky top-0 bg-white' >
            <h1 className='flex text-[2rem] font-bold ' >SAVED JOBS</h1>
        </div>
        <div id="board-con" className='flex flex-col overflow-y-scroll lg:p-2 max-h-screen lg:gap-2 lg:grid lg:grid-cols-2  w-full items-center mt-4 mb-4'>
            <ConBoard />
            <ConBoard />
        </div>
    </div>
  )
}

export default Board