import { useState } from 'react'
import WeatherDisplay from './components/WeatherDisplay'
import StateSelector from './components/StateSelector'
import DistrictSelector from './components/DistrictSelector'

function App() {
  const [selectedState, setSelectedState] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      
      <StateSelector 
        selectedState={selectedState} 
        onStateChange={setSelectedState} 
      />
      
      <DistrictSelector 
        selectedState={selectedState} 
        selectedDistrict={selectedDistrict} 
        onDistrictChange={setSelectedDistrict} 
      />
      
      <WeatherDisplay district={selectedDistrict} />
    </div>
  )
}

export default App