import React from 'react'
import Task from './Task'

import './taskContainer.css'


const tasks = [
  {
    id: 1,
    done: false,
    description: "Jog around the park"
  },
  {
    id: 2,
    done: false,
    description: "Pick up groceries"
  },
  {
    id: 3,
    done: false,
    description: "Read for 1 hour"
  },
  {
    id: 4,
    done: false,
    description: "10 minutos medititation"
  },
  {
    id: 5,
    done: true,
    description: "Complete online javascript course"
  }
]

const TaskContainer = () => {


  const taskList = tasks.map(item => <Task 
    description={item.description}
    done={item.done}
    key={item.id}
  />)

  return (
    <main className='taskContainer__container'>
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