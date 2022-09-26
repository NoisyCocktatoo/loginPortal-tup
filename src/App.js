import React from 'react'
import './App.css'

import Top from './components/Top'
import Bull from './components/Bull'
import Foot from './components/Foot'

function App() {
  return (
    <div className='app-main'>
        <Top />
        <Bull />
        <Foot />
    </div>
  )
}

export default App