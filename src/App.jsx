import { useState } from 'react'
import './App.scss'

function App() {


  const getQuote = () => {
    const randomNumber = Math.floor(Math.random() * 1500)
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => setDisplay(data[randomNumber]))
  }

  const [display, setDisplay] = useState('')

  return (
    <div className='App'>
      <div className='button'>
        <button onClick={getQuote}>Get Quote</button>
      </div>
      <div className='content'>
        <div id='quote'>"{display.text}"</div>
        <div id='author'>-{display.author}</div>
      </div>
    </div>
  )
}



export default App
