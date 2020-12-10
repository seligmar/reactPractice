import React from 'react'
import './App.css'

const Title = props => {
  return React.createElement('h1', {}, props.title)
}
const App = () => {
  return Title({ title: 'AMAZING' })
}

export default App
