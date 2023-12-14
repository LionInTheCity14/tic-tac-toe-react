import React from 'react'
import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className="app" />
  </React.StrictMode>,
)
