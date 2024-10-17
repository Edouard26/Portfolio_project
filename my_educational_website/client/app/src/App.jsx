import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1> ML-Explorer </h1>

      <div>
        <input type="text" placeholder="Model Name" />
        <input type="text" placeholder="Model Version" />
        <button> Add Model</button>
      </div>

    </>
  )
}

export default App
