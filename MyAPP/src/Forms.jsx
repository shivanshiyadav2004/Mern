import React, { useState } from "react"

const Forms = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data,setData]=useState({})

  const handleClick = (e) => {
    e.preventDefault();

    const data = { name,email, password,};
   
    localStorage.setItem("data", JSON.stringify(data))


    setName("")
    setEmail("")
    setPassword("")
  }
   const getData=()=>{
      const user=localStorage.getItem("data")
      setData(JSON.parse(user))

    }

  return (
    <div>
      <h1>Sign Up Form</h1>

      <form onSubmit={handleClick}>
        
          <label>Name :</label>
          <input type="text" value={name} placeholder="Enter your name"onChange={(e) => setName(e.target.value)} /><br />
          <label>Email :</label>
          <input type="email"value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Password :</label>
         <input type="password"value={password}placeholder="Enter your password"onChange={(e) => setPassword(e.target.value)}/><br />
         <button type="submit">Sign Up</button>
      </form>
      <button onClick={getData}>Get Data:</button>
      <p>{data.name}</p>
      <p>{data.email}</p>
      



    </div>
  )
}

export default Forms