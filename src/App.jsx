import { useState } from 'react'
import Game from "./components/Game"

import './styles/App.css'

function App() {

  return (
    <div className='main'>
      <h2>Tic-Tac-Toe</h2>
      <Game />
    </div>
  )
}

export default App
