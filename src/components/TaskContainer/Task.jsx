import React from 'react'

import checkIcon from '../../assets/icon-check.svg'
import crosIcon from '../../assets/icon-cross.svg'

import './task.css'

const Task = ( props ) => {

  const { 
    description,
    done,
    theme,
    deleteById,
    checkById
  } = props

  const fontTheme = ( theme === 'light' ) ? 'light-font' : 'dark-font'
  const contDone = done ? 'task__container done': 'task__container'
  

  return (
    <div 
      className={`${contDone} ${theme === 'dark' && 'dark-container' }`}
    >
      <span 
        className={`task__check-container ${theme === 'dark' && 'dark'}`}
        onClick={checkById}
      >
        <img 
          className={`task__check-image ${done && 'show' }`} 
          src={checkIcon} 
          alt="check" 
        />
      </span>

      <p onClick={checkById} className={fontTheme}>{description}</p>

      <img
        onClick={deleteById}
        className={`task__cross-icon ${theme === 'dark' && 'darkIcon'}`}
        src={crosIcon}
        alt="cross" 
      />
    </div>
  )
}

export default Task