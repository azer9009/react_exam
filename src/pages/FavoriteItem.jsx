import React, { useState } from 'react'
import '../main.css'
const FavoriteItem = () => {

    const [favorite, setFavorite] = useState(true)

    const handleFavorite = () => {
        setFavorite(!favorite)
          
    }
    const [Sfavorite, setSFavorite] = useState(true)

    const handleSFavorite = () => {
        setSFavorite(!Sfavorite)
          
    }
    const [Tfavorite, setTFavorite] = useState(true)

    const handleTFavorite = () => {
        setTFavorite(!Tfavorite)
          
    }

    
  return (
    <div>
      <ul>
        <li> Kitab <button onClick={handleFavorite}  className='btn ' style={{
            backgroundColor: favorite ? 'white' : 'red'
        }} ></button></li>
        <li> Tisbaga <button onClick={handleSFavorite}  className='btn ' style={{
            backgroundColor: Sfavorite ? 'white' : 'red'
        }} ></button></li>
        <li> Hdmi Cable <button onClick={handleTFavorite}  className='btn ' style={{
            backgroundColor: Tfavorite ? 'white' : 'red'
        }} ></button></li>
       
      </ul>
    </div>
  )
}

export default FavoriteItem
