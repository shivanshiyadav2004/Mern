import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
    const inc=()=>{
        setCount((count)=>count+1)
    }
    const reset=()=>{
        setCount(0)
    }
    const dec=()=>{
        setCount((count)=>count-1)
    }
    const proQua=()=>{
        setCount:((quantity)=>quantity+1)
    }
    const price=200
    const total=quantity*rice
  return (
    <div>
      <button onClick={inc}>Inc</button>
      <button onClick={reset}>Reset</button>
      <button onClick={dec}>Dec</button>
      
      <h1>count:{count}</h1>
      <button onClick={proQua}>Inc Quantity</button>
      <p>Quantity:{quantity}</p>
      <h1>total Amount:{total}</h1>
    </div>
  )
}

export default UseState
