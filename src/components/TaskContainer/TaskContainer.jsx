import React from 'react'
import { TodoContext } from '../../context/TodoContext'
import Task from './Task'

import './taskContainer.css'




const TaskContainer = () => {

  const {
    theme,
    todoList,
    clearCompleted,
    deleteById,
    checkById,
    changeToAll,
    changeToActive,
    changeToCompleted,
    stateList
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
                  <span className={`${stateList.all ? 'active': ''}`}  onClick={changeToAll}>All</span>
                  <span className={`${stateList.active ? 'active': ''}`}  onClick={changeToActive}>Active</span>
                  <span className={`${stateList.completed ? 'active': ''}`}  onClick={changeToCompleted}>Completed</span>
                </div>

                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>
        <div className={`taskContainer__options mobile ${cTheme} ${themeFont}`}>
            <span className={`${stateList.all ? 'active': ''}`} onClick={changeToAll}>All</span>
            <span className={`${stateList.active ? 'active': ''}`} onClick={changeToActive}>Active</span>
            <span className={`${stateList.completed ? 'active': ''}`} onClick={changeToCompleted}>Completed</span>
        </div>

    </main>
  )
}

export default TaskContainer