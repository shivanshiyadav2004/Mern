import React from 'react'

const Student = ({data}) => {
  return (
    <div>
     <p>{data.name}</p>
     <p>{data.age}</p>
     <p>{data.course}</p>
    </div>
  )
}

export default Student
