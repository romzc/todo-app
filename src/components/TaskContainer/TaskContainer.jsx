import React from 'react'
import { TodoContext } from '../../context/TodoContext'
import Task from './Task'

import './taskContainer.css'




const TaskContainer = () => {

  const {
    theme,
    todoList,
    setActiveTasks,
    setCompletedTasks,
    setAllTask,
    clearCompleted,
    deleteById,
    checkById
  } = React.useContext(TodoContext)

  const taskList = todoList.map(item => <Task 
    description={item.description}
    done={item.done}
    theme={theme}
    key={item.id}
    deleteById={() => deleteById(item.id)}
    checkById={() => checkById(item.id)}
  />)

  const activeTask = todoList.filter(item => !item.done).length

  const cTheme = (theme === 'light') ? 'light' : 'dark';
  const themeFont = (theme === 'light') ? 'lightFont' : 'darkFont';

  return (
    <main className='taskContainer__container'>
        <div className={`taskContainer__main ${cTheme}`}>
            { 
              todoList.length > 0 ?
              taskList 
              :
              <p className={`taskContainer__empytmesage ${themeFont}`}>Nothing to show</p> 
            }
            <div className={`taskContainer__main-info ${themeFont}`}>
                <span>{activeTask} items left</span>

                <div className={`taskContainer__options desktop`}>
                  <span onClick={setAllTask}>All</span>
                  <span onClick={setActiveTasks}>Active</span>
                  <span onClick={setCompletedTasks}>Completed</span>
                </div>

                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>
        <div className={`taskContainer__options mobile ${cTheme} ${themeFont}`}>
            <span onClick={setAllTask}>All</span>
            <span onClick={setActiveTasks}>Active</span>
            <span onClick={setCompletedTasks}>Completed</span>
        </div>

    </main>
  )
}

export default TaskContainer