import React, { useState } from 'react'

const Password = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [inputPassword, setInputPassword] = useState("")

  const [liked, setLiked] = useState(false)

  const likes = () => {
    setLiked(prev => !prev)
  }

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />

      <button onClick={() => setShowPassword(prev => !prev)}>
        {showPassword ? "Hide" : "Show"}
      </button>

      <p>Like: {liked ? 1 : 0}</p>

      <button onClick={likes}>
        {liked ? "Remove Like" : "Give Like"}
      </button>
    </div>
  )
}

export default Password