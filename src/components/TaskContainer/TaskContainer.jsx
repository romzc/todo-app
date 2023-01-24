import React from 'react'
import { TodoContext } from '../../context/TodoContext'
import Task from './Task'

import './taskContainer.css'




const TaskContainer = () => {

  const {todoList, theme} = React.useContext(TodoContext)

  const taskList = todoList.map(item => <Task 
    description={item.description}
    done={item.done}
    key={item.id}
  />)

  const cTheme = (theme === 'light') ? 'light' : 'dark'

  return (
    <main className={`taskContainer__container ${cTheme}`}>
        <div className='taskContainer__main'>
            { taskList }
            <div className='taskContainer__main-info'>
                <span>5 items left</span>
                <span>Clear Completed</span>
            </div>
        </div>

        <div className="taskContainer__options">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
        </div>

    </main>
  )
}

export default TaskContainer