import React from 'react'
import "../sass/Button.scss"

const Button = (props) => {
  return (
    <div className='Button__Box'>
        <button className='Button'>
            {props.text}
        </button>
    </div>

  )
  
}

export {Button}


