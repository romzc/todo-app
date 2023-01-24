import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'
import SearchBar from '../SearchBar/SearchBar'
import Title from '../Title/Title'

import './header.css'

const Header = () => {

  return (
    <header className='header__container'>
      <Title />
      <SearchBar />
    </header>
  )
}

export default Header