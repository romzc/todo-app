import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import TaskContainer from '../components/TaskContainer/TaskContainer'

import { TodoContext } from '../context/TodoContext'

import './home.css'

const Home = () => {

  const { theme } = useContext(TodoContext)

  const themeBackground = theme === 'light' ? 'lightBackground' : 'darkBackground'

  return (
    <div className={`home__container ${themeBackground}`}>
        <Header />
        <TaskContainer />
    </div>
  )
}

export default Home