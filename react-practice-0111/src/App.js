import React from 'react'
import './App.css'

const Title = props => {
  return React.createElement('h1', {}, props.title)
}

const Article = props => {
  const imgStyle = { maxWidth: '500px' }
  return (
    <div>
      <h2>{props.headline}</h2>
      <img style={imgStyle} src={props.src} />
      <p>{props.text}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Title title='AMAZING' />
      <Article
        headline='sloths!'
        src='https://i.insider.com/5acf7d03146e7124008b46c2?width=1136&format=jpeg'
        text='sloths are just the coolest'
      />
    </div>
  )
}

export default App
