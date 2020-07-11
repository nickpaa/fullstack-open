import React from 'react'
const Weather = ({city, weather}) => {
  console.log(weather)
  if (!weather) {
    return null
  }
  
  return (
    <div>
      <h4>Weather in {city}</h4>
      <div>Temperature: {weather.temperature} </div>
      <div>Wind: {weather.wind_speed} mph from the {weather.wind_dir} </div>
      {/* <div>Weather description: {weather.weather_descriptions[0]}</div>
      <img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} /> */}
    </div>
  )
}

export default Weather