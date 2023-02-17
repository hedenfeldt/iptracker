import { useState } from 'react'
import Map from './components/Map'

import './App.css'
import IpTracker from './components/IpTracker'

function App() {
  const [count, setCount] = useState(0)
  const [ipData, setIpData] = useState(null)

  return (
    <div className="App">
    <IpTracker ipData={ipData} setIpData={setIpData} />
    <Map ipData={ipData} />
    </div>
  )
}

export default App
