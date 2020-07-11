import React from 'react'

// const Name = ({name}) => (
//   <>
//       {name}
//   </>
// )

// const Number = ({number}) => (
//   <>
//       {number}
//   </>
// )

// const Person = ({person}) => (
//   <div>
//     <Name name={person.name} />: <Number number={person.number} />
//   </div>
// )

const People = ({people, deletePerson}) => {
  return (
    people.map(person =>
      <div key={person.id}>
        {person.name} {person.number}
        <button onClick={() => deletePerson(person.id)}>delete</button>
      </div>
      )
  )
}

  // return (
  //   people.map(person =>
  //     <div>
  //       <Person key={person.name} person={person} />
  //       <button onClick={() => deletePerson(person.id)}>Delete</button>
  //     </div>
  //     )
  // )

  // <div>
    // {/* {people.map(person => (
    //   <Person key={person.name} person={person} />
    //   <button onClick={() => deletePerson(person.id)}></button>
    // )
    // } */}
  // </div>



export default People