import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  let myobj = {
    username: 'wajiha',
    age: 20

  }

  let newarray = [1, 2, 3, 4]
  

  return (
    <>
      <h1 className='bg-green-800 text-black  p-4 rounded-xl mb-4 '>WAJIHA MALIK</h1>
      <Card channel = 'chai aur code' btntext= 'click me' />
      <Card channel = 'chai aur react' btntext = 'visit me' />


      
    </>
  )
}

export default App
                 