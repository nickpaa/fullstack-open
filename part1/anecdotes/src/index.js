import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({text, votes=0}) => (
  <div>
    <div>
      {text}
    </div>
    <div>
      has {votes} votes
    </div>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [popular, setPopular] = useState(0)

  const vote = () => {
    const selectedVotes = votes[selected] || 0
    setVotes({...votes, [selected]: selectedVotes + 1})
    if (!votes[popular] || selectedVotes + 1 > votes[popular]) {
      setPopular(selected)
    }
  }

  const pickRandom = () => (
    setSelected(Math.floor(Math.random() * 5))
  )

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />
      <button onClick={vote}>Vote</button>
      <button onClick={pickRandom}>Random anecdote</button>
      <h1>Most popular anecdote</h1>
      <Anecdote text={props.anecdotes[popular]} votes={votes[popular]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)