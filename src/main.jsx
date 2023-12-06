import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './router/MyRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import "./stylesheets/style.scss"
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
