import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context/TodoContext'

import './searchBar.css'

const SearchBar = () => {

    const { addTask, theme } = useContext(TodoContext)
    const [task, setTask] = useState('')
  
    const insertNewTask = (event) => {
      if(event.keyCode == 13) {
        addTask({description: task})
        setTask('')
      }
    }
  
    const handleChangeTask = (event) => {
      setTask(event.target.value)
    }

    const cTheme = (theme === 'light') ? 'lightSearch' : 'darkSearch'
  
    return (
        <div className={`search__container ${cTheme}`}>
            <span className={`search__icon ${cTheme}`}></span>
            <input
              placeholder='type your task, then enter'
              className={`search__textArea ${cTheme}`}
              value={task}
              onChange={handleChangeTask}
              onKeyUp={insertNewTask}
            />
        </div>
    )
}

export default SearchBar