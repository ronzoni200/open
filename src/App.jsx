import { useState } from 'react'
import Hola from './saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>parte 1 React</h1>
      <Hola nombre='gustavo' edad={34}/>
      <Hola nombre='maria' edad={26}/>
    </>
  )
}

export default App
