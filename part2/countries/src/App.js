import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [filter, setFilterString] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = filter.length === 1 ?
    countries :
    countries.filter(c => c.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)

  return (
    <div>
      <Filter filterString={filter} setFilterString={setFilterString} />
      <Countries countries={countriesToShow} setFilterString={setFilterString} />
    </div>
  )
}

export default App;
