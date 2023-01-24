import React from 'react'
import Header from '../components/Header/Header'
import TaskContainer from '../components/TaskContainer/TaskContainer'

import mobileLightBackground from '../assets/bg-mobile-light.jpg'
import './home.css'

const Home = () => {

  return (
    <div className="home__container">
        <Header />
        <TaskContainer />
    </div>
  )
}

export default Home