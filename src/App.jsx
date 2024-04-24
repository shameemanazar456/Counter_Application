import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
    <div className='p-5 rounded shadow' style={{backgroundColor:'white', width:'40%'}}>
      <h1 className='text-primary mt-4 text-center'>Counter Application</h1>
      <Counter/>
    </div>
    </div>
    </>
  )
}

export default App
