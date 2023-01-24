import React, { useState } from 'react'
import { TodoContext, themes, TodoProvider } from './context/TodoContext'
import Home from './pages/Home'

const App = () => {

  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  )
}

export { App }