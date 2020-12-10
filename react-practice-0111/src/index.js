import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  // this puts the /App file on the page - what to render
  <React.StrictMode>
    <App />
  </React.StrictMode>, // is strict mode new?
  // where to render-- on the document at the 'root' id
  document.getElementById('root')
)


