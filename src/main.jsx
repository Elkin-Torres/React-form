import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './router/MyRouter'
import { BrowserRouter } from 'react-router-dom'
import "./stylesheets/style.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
