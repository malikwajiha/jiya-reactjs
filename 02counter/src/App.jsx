import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // changes propagate krwaty hooks k through
  const [addcounter , setaddcounter] = useState(15 )
  // let counter = 15

  let addValue = () => {
    if (addcounter < 30 )  {
      setaddcounter(addcounter + 1)
    }
  }

  const [removecounter, setremovecounter]= useState(15)

  let removeValue = () => {
    if (removecounter > 0) {
      setremovecounter(removecounter - 1)
    }
  }

  return (
    <>
     <h1>Chai Aur Code</h1>
     <h2>counter value {addcounter}</h2>
     <button
     onClick={addValue}
     >Add Value {addcounter}</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove Value {removecounter}</button>
     <p>Footer</p>
    </>
  )
}

export default App
