import { useState } from 'react'
import './App.css'

function App() {

  const [number, setNumber] = useState(0)

  let increase = () => {
    if (number < 20) {
      setNumber(number + 1)
    } else{
      setNumber(20)
    }
  }
  let decrease = () => {
    if (number > 0) {
      setNumber(number - 1)
    } else{
      setNumber(0)
    }
  }

  return (
    <>
      <h3>Counter is: {number}</h3>
      <button onClick={increase}>Increase Value</button>
      <button onClick={decrease}>Decrease Value</button>
    </>
  )
}

export default App
