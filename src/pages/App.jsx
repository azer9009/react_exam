import React from 'react'
import CountDown from './CountDown'
import InputMirror from './InputMirror'
import ButtonCounter from './ButtonCounter'
import FavoriteItem from './FavoriteItem'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      gap: '50px',
      alignItems: 'center',
    }} >
      <CountDown/>
      <InputMirror/>
      <ButtonCounter/>
      <FavoriteItem/>
    </div>
  )
}

export default App
