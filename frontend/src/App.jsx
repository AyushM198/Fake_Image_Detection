import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './components/landingpage'
import BorderBeamDemo from './components/login'
import messageContext from './context/messagecontext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <LandingPage />
        {/* <BorderBeamDemo /> */}
        </div>
    </>
  )
}

export default App
