import React from 'react'

const Bubble = ({style, width, height, r}) => {
    const center = width / 2
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={style} width={width} height={height}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#71c947" stopOpacity="1" />
          <stop offset="100%" stopColor="#a8e78a" stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle cx={center} cy={center} r={r} fill="url(#gradient)" /* stroke="white" strokeWidth="1"  *//>
    </svg>

  )
}

export default Bubble