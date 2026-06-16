import React from 'react'
import Student from './Student'
const Teachers = () => {
  const Shivanshi={

   name: "Shivanshi Yadav",
    age: 22,
    course: "MERN Stack"
    
  }
  return (
    <div>
     <Student data={Shivanshi} />
    </div>
  )
}

export default Teachers
