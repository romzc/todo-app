import React from 'react'

import checkIcon from '../../assets/icon-check.svg'
import crosIcon from '../../assets/icon-cross.svg'

import './task.css'

const Task = ( props ) => {

  const { description, done} = props

  return (
    <div 
      className={ done ? 'task__container done': 'task__container'}
    >
      <span className='task__check-container'>
        <img src={checkIcon} alt="check" />
      </span>

      <p>{description}</p>

      <img className='task__cross-icon' 
        src={crosIcon}
        alt="cross" 
      />
    </div>
  )
}

export default Task