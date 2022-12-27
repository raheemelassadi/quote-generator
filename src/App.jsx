import { useState, useEffect } from 'react'
import './App.scss'
import HashLoader from "react-spinners/HashLoader";


function App() {

  const [display, setDisplay] = useState('')

  const [loading, setLoading] = useState(false)

  const getQuote = () => {
    const randomNumber = Math.floor(Math.random() * 1500)
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => setDisplay(data[randomNumber]))
  }

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1500)
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => setDisplay(data[randomNumber]))
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <div className='main'>
      {
        loading ?  
        <div id='loader'>  
        <HashLoader
        color="#36d7b7"
        cssOverride={{}}
      /></div>
      :
      
    <div className='App'>
      
      <div className='button'>
        <button onClick={getQuote}>Get Quote</button>
      </div>
      <div className='content'>
        <div id='quote'>"{display.text}"</div>
        <div id='author'>-{display.author}</div>
      </div>
    </div>
    }
    </div>
  )
}



export default App
