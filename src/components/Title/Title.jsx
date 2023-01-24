import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

import './title.css'
import moonIcon from '../../assets/icon-moon.svg'
import sunIcon from '../../assets/icon-sun.svg'

const Title = () => {

  const {changeTheme, theme} = useContext(TodoContext)
  
  return (
    <div className='title__container-title'>
        <h1>TODO</h1>
        <span>
          <img
            onClick={changeTheme}
            src={theme === 'light' ? moonIcon : sunIcon } 
            alt="theme"
          />
        </span>
    </div>
  )
}

export default Title