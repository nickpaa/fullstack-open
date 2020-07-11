import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import People from './components/People'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {

  const [people, setPeople] = useState([])
  const [filterString, setFilterString] = useState('')

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       setPeople(response.data)
  //   })
  // }, [])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])
  
  const peopleToShow = filterString.length === 1 ?
    people
    : people.filter(person => person.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1)

  const deletePerson = (id) => {
    const personToDelete = people.find(p => p.id === id)
    const ok = window.confirm(`Delete ${personToDelete.name}?`)
    if (ok) {
      personService
        .remove(id)
        .then(response => {
          setPeople(people.filter(p => p.id !== id))
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} setFilterString={setFilterString} />
      <h2>Add new</h2>
      <PersonForm people={people} setPeople={setPeople} />
      <h2>Numbers</h2>
      <div>
        <People people={peopleToShow} deletePerson={deletePerson} />
      </div>
    </div>
  )
}

export default App