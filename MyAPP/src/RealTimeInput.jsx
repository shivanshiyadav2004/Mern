import React, { useState } from "react"

const RealTimeInput = () => {
  const [text, setText] = useState("")

  return (
    <div>
      <h2>Real Time Input</h2>

      <input
        type="text"
        placeholder="Enter something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>You typed: {text}</h3>
    </div>
  )
}

export default RealTimeInput