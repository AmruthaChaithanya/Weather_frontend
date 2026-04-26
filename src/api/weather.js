const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchWeather = async (district) => {
  const response = await fetch(`${API_BASE_URL}/weather/?district=${encodeURIComponent(district)}`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data')
  }
  
  return response.json()
}

