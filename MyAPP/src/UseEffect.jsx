import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("Even");
  const [data, setData] = useState([]);

  // Even or Odd
  useEffect(() => {
    if (count % 2 === 0) {
      setType("Even");
    } else {
      setType("Odd");
    }
  }, [count]);

  
  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const result = await res.json()
      setData(result)
    } catch (error) {
      console.log(error)
    }
  };

  
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>UseEffect</h1>

      <button onClick={() => setCount((count) => count + 1)}>Inc </button>

      <p>Count is: {count}</p>
      <p>Type: {type}</p>

      <button onClick={getData}>Fetch Data</button>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default UseEffect