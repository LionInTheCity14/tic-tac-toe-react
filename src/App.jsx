import { useState } from 'react'
import Board from "./components/Board"

import './styles/App.css'

function App() {

  return (
    <div className='main'>
      <h2>Tic-Tac-Toe</h2>
      <Board />
    </div>
  )
}

export default App
