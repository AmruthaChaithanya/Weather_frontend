import { useQuery } from '@tanstack/react-query'
import { fetchWeather } from '../api/weather'

export const useWeather = (district) => {
  return useQuery({
    queryKey: ['weather', district],
    queryFn: () => fetchWeather(district),
    enabled: !!district, // Only run query if district is selected
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  })
}