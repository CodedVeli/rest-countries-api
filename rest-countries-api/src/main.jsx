import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from './rtk/store.js'
import { DarkModeProvider } from './context/UseDarkMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <DarkModeProvider>      
      <Provider store={store}>
        <App />
      </Provider>
      </DarkModeProvider>
    </HashRouter>
  </React.StrictMode>,
)
