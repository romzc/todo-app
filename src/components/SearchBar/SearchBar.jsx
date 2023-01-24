import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context/TodoContext'

const SearchBar = () => {

    const { addTask } = useContext(TodoContext)
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
  

    return (
        <div className='search__container'>
            <span></span>
            <textarea 
                value={task}
                onChange={handleChangeTask}
                onKeyUp={insertNewTask}
            />
        </div>
    )
}

export default SearchBar