import React from 'react'

const Filter = ({filterString, setFilterString}) => {
  const handleChange = (event) => {
    setFilterString(event.target.value)
  }

  return (
    <div>
      find countries <input value={filterString} onChange={handleChange} />
    </div>
  )
}

export default Filter