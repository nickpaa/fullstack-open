import React, { useState } from 'react'
// import axios from 'axios'
import Notification from './Notification'
import personService from '../services/persons'

const PersonForm = ({people, setPeople}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  const checkNameExists = () => {
    const names = people.map(person => person.name)
    return (names.indexOf(newName) !== -1)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (checkNameExists()) {
      alert(`${newName} is already in the phonebook`)
    }
    else {
      // setPeople(people.concat(personObject))
      // setNewName('')
      // setNewNumber('')
      
      // axios
      //   .post('http://localhost:3001/persons', personObject)
      //   .then(response => {
      //     setPeople(people.concat(personObject))
      //     setNewName('')
      //     setNewNumber('')
      //   })

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPeople(people.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`${newName} has been added to the phonebook`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
    }
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Notification message={successMessage} />
    </div>
  )
}
  

export default PersonForm