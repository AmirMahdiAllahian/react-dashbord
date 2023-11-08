import React from 'react'
import './Button.css'

export default function Button({img,txt1,txt2}) {
  return (
    <div className='button-container' style={{cursor:'pointer'}}>
        <div className='img'>
            <img src={img} alt='' />
        </div>
        <div className="text">
            <span>{txt1}</span>
            <span>{txt2}</span>
        </div>
    </div>
  )
}
