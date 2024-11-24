import React, { useState } from 'react'

const InputMirror = () => {

    const [value, setValue] = useState('')

  return (
    <div>
      <input
      onChange={(e)=> setValue(e.target.value)}

      type="text" />
    
        <h1>{value}</h1>

    </div>
  )
}

export default InputMirror
