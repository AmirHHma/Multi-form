import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import store from './redux/store'
import React from 'react'
import { Provider } from 'react-redux'

createRoot(document.body).render(
  // <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  /* </StrictMode>, */
)
