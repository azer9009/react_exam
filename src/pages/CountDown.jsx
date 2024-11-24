import React, { useState } from 'react'

const CountDown = () => {

    const [count, setCount] = useState(20)
        

    const handleStart = () => {
      setInterval(() => {
         
       setCount((prewcount)=> prewcount - 1 )
         
         

        }, 1000);

        

    }

   
    
  return (
    <div>

     

      <h1>{count}</h1>

      
      
      <button onClick={handleStart} >Start CountDown</button>
    </div>
  )
}

export default CountDown
