import { useState } from 'react'
import './app.css'
import { Form } from './Form'
import { Nav } from './Nav'

function App() {

  return (
    <div className="App">
      <div className="Main">
          <div className='NavZone'><Nav/></div>
          <div className='FormZone'><Form/>
          </div>
      </div>


    <div className="IMG">
      <img src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
    </div>

    </div>
  )
}

export default App
