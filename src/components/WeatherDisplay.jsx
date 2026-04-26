import { useWeather } from '../hooks/useWeather'

const WeatherDisplay = ({ district }) => {
  const { data, isLoading, error } = useWeather(district)

  if (!district) {
    return (
      <div className="weather-info">
        <p>Please select a state and district to view weather information.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading weather data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error.message}</p>
      </div>
    )
  }

  if (data) {
    return (
      <div className="weather-info">
        <div className="temperature">{data.temp}°C</div>
        <div className="description">{data.description}</div>
      </div>
    )
  }

  return null
}

export default WeatherDisplay