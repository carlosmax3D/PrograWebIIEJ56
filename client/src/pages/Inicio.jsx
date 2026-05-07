import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/react.svg'
import './Inicio.css'
import Welcome from '../components/Welcome'
import Menu from '../components/Menu'
function Inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu></Menu>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Welcome name="Carlos"/>
      <Welcome name="Rey"/>
      <Welcome name="Cesar"/>
    </>
  )
}

export default Inicio