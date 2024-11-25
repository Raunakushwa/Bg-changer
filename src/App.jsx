import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}} >
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0' >
        <div className="box flex flex-wrap justify-center shadow-xl bg-white gap-8 px-3 py-2 rounded-2xl">
          <button onClick={()=>{setColor("red")}}  className='rounded-full px-4 py-1 text-white shadow-lg ' style={{backgroundColor:"red"}} >Red</button>
          <button onClick={()=>{setColor("blue")}}  className='rounded-full px-4 py-1 text-white shadow-lg ' style={{backgroundColor:"Blue"}} >Blue</button>
          <button onClick={()=>{setColor("green")}} className='rounded-full px-4 py-1 text-white shadow-lg ' style={{backgroundColor:"green"}} >green</button>
          <button onClick={()=>{setColor("yellow")}} className='rounded-full px-4 py-1 text-black shadow-lg ' style={{backgroundColor:"Yellow"}} >Yellow</button>
          <button onClick={()=>{setColor("purple")}} className='rounded-full px-4 py-1 text-white shadow-lg ' style={{backgroundColor:"purple"}} >Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
