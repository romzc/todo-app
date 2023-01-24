import { createContext, useState } from "react"

const themes = {
    light: 'light',
    dark: 'dark'
}

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

const TodoContext = createContext()

const TodoProvider = (props) => {

  const [theme, setTheme] = useState('light')
  const [todoList, setTodoList] = useState(tasks)

  const changeTheme = () => {
    const auxTheme = (theme === 'light') ? 'dark' : 'light';
    setTheme(auxTheme)  
  }

  const addTask = (newTask) => {
    newTask = {...newTask, id: todoList.length + 1, done: false}
    setTodoList(prev => [...prev, newTask])
  }

  return (
    <TodoContext.Provider
      value={{
        theme,
        changeTheme,
        todoList,
        addTask
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}


export {TodoContext, TodoProvider}