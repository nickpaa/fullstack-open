import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const Countries = ({countries, setFilterString}) => {
  if (countries.length === 0) {
    return (
      <div>
        no matches
      </div>
    )
  }

  else if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
      </div>
    )
  }

  else {
    return (
      <div>
        {countries.map(country =>
          <div key={country.name}>
            {country.name}
            <button onClick={() => setFilterString(country.name)}>show</button>
          </div>
        )}
      </div>
    )
  }
}

const Country = ({country}) => {
  const [weather, setWeather] = useState([])
  const apiKey = process.env.REACT_APP_API_KEY.trim()
  const weatherURL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}&units=f`
  console.log(weatherURL)

  useEffect(() => {
    axios
      .get(weatherURL)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [])

  return (
    <div>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h4>Languages:</h4>
      <ul>
        {country.languages.map(language => 
          <li key={language.name}>
            {language.name}
          </li>)}
      </ul>
      <img src={country.flag} alt="country flag" width="100" border="1px solid black" />
      <Weather city={country.capital} weather={weather} />
    </div>
  )
}

export default Countries