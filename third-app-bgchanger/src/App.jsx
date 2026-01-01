import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("gray")

  return (
    <div className='w-full h-screen duration-400' style={{backgroundColor:color}}>
      <div className='fixed bottom-3 flex flex-wrap w-full py-2 px-7 justify-center'>
        <div className='flex flex-wrap bg-white py-2 px-3 rounded-full gap-4'>
          <button
          onClick={() => setColor("red")}
          className='px-3 py-1 text-white rounded-2xl'
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("blue")}
          className='px-3 py-1 text-white rounded-2xl'
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
