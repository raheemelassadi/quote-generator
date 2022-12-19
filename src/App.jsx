import { useState } from 'react'
import './App.css'

function App() {


  const quote = () => {
    const randomNumber = Math.floor(Math.random() * 1500)
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => setDisplay(data[randomNumber]))
  }

  const [display, setDisplay] = useState([])

  return (
    <div className="App">
      <button onClick={quote}>get quote</button>
      <div>{display.text}</div>
      <div>{display.author}</div>
    </div>
  )
}



export default App
