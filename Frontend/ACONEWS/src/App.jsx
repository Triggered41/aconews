import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/Card'
import { MainPage } from './Components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MainPage />
      </div>
    </>
  )
}

export default App
