import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export default function render(dom) {
  ReactDOM.createRoot(dom).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
