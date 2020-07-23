const express = require('express')
const {response} = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.use(express.json())

// const requestLogger = (req, res, next) => {
//   console.log('Method', req.method)
//   console.log('Path', req.path)
//   console.log('Body', req.body)
//   console.log('---')
//   next()
// }

// app.use(requestLogger)

app.get('/info', (req, res) => {
  msg = `<p>Phonebook has ${persons.length} entries</p>`
  msg += `<p>${new Date()}</p>`
  res.send(msg)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  if (persons.filter(p => p.name === body.name)) {
    return res.status(400).json({
      error: 'name already in phonebook'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 9999999)
  }

  persons = persons.concat(person)
  res.json(person)
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({
    error: 'unknown endpoint'
  })
}

app.use(unknownEndpoint)

const port = 3001
app.listen(port)
console.log(`server running on port ${port}`)