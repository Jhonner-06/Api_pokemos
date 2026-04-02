import React from 'react'
import "../sass/Button.scss"

const Button = ({icon, handleClick}) => {
  return (
    <div className='Button__Box'>
        <button className='Button' onClick={handleClick}>
            {icon}
        </button>
        <div className='Button__shadow'></div>
    </div>

  )
  
}

export {Button}


