import { createContext, useState } from "react"
import { nanoid } from "nanoid"

const tasks = [
    {
      id: nanoid(),
      done: false,
      description: "Jog around the park"
    },
    {
      id: nanoid(),
      done: false,
      description: "Pick up groceries"
    },
    {
      id: nanoid(),
      done: false,
      description: "Read for 1 hour"
    },
    {
      id: nanoid(),
      done: false,
      description: "10 minutos medititation"
    },
    {
      id: nanoid(),
      done: true,
      description: "Complete online javascript course"
    }
]

const TodoContext = createContext()

const TodoProvider = (props) => {

  const [theme, setTheme] = useState('light');
  const [originalList, setOriginalList] = useState(tasks);
  const [todoList, setTodoList] = useState(originalList);
  const [stateList, setStateList] = useState({all: true, active: false, completed: false});


  /**
   * change state of list to all.
   */
  const changeToAll = () => {
    setStateList({ active: false, completed: false, all: true});
    setAllTask();
  }

  const changeToActive = () => {
    setStateList({ active: true, completed: false, all: false});
    setActiveTasks();
  }

  const changeToCompleted = () => {
    setStateList({ active: false, completed: true, all: false});
    setCompletedTasks();
  }

  const changeTheme = () => {
    const auxTheme = (theme === 'light') ? 'dark' : 'light';
    setTheme(auxTheme);
  }

  const addTask = (newTask) => {
    if ( newTask.description.length < 0 ) return

    newTask = {...newTask, id: nanoid(), done: false}
    setTodoList(prev => [...prev, newTask])
    setOriginalList(prev => [...prev, newTask])
  }

  const setActiveTasks = () => {
    const activeTasks = originalList.filter(item => !item.done)
    setTodoList(activeTasks)
  }

  const setCompletedTasks = () => {
    const completedTasks = originalList.filter(item => item.done)
    setTodoList(completedTasks)
  }

  const setAllTask = () => {
    setTodoList(originalList)
  }

  const clearCompleted = () => {
    const activeTasks = originalList.filter(item => !item.done)
    setOriginalList(activeTasks)
    setTodoList(activeTasks)
  }

  const deleteById = (id) => {
    const saveTasks = originalList.filter(item => item.id != id )

    setOriginalList(saveTasks)
    setTodoList(saveTasks)
  }

  const checkById = (id) => {
    const checkOriginal = originalList.map(item => {
      return item.id === id ? {...item, done: true} : item
    })
    
    setOriginalList(checkOriginal)
    setTodoList(checkOriginal)
  }

  return (
    <TodoContext.Provider
      value={{
        theme,
        todoList,
        stateList,
        changeTheme,
        addTask,
        clearCompleted,
        deleteById,
        checkById,
        changeToAll,
        changeToActive,
        changeToCompleted
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}


export {TodoContext, TodoProvider}