import { useState } from 'react'
import './App.css'
import Kondalek from './components/pages/Kondalek/Kondalek'
import { BrowserRouter } from'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/MarksUp_Frontend/'>
      <Kondalek/>
    </BrowserRouter>
  )
}

export default App
