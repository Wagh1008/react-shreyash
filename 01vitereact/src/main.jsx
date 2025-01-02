import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MyApp()
{
  return(
    <div>
      <h1>Custom App | </h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
const anotherUser = "React is Great"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'Click me to visit Google',
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // MyApp()
  // </StrictMode>,
  // anotherElement
  // <MyApp/>
  reactElement
  // <App/>
)

