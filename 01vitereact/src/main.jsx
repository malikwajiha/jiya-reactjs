import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return(
    <div>
      <Chai/>
      <h1>Custom App | chai {anotherUser}</h1>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',  
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to Visit'
    
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>visit Google</a>
  
)
const anotherUser = 'chai aur react'

const ReactElement= React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google.... ',
  anotherUser

)


createRoot(document.getElementById('root')).render(
  
    ReactElement
  
)        
