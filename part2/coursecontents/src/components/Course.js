import React from 'react'

const Header = ({name}) => (
    <>
      <h1>{name}</h1>
    </>
  )

const Part = ({name, exercises}) => (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
  
const Content = ({parts}) => (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
  
const Course = ({course}) => {
    const total = course.parts
      .map(part => part.exercises)
      .reduce((sum, numEx) => {
        return sum + numEx
      }, 0)
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <strong>total of {total} exercises</strong>
      </div>
    )
  }

export default Course