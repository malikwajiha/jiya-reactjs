import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  
  
  return (
    <>
      <h1 className='text-3xl text-center mt-10'>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
