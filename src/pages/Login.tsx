import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from "../api/authApi"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate()

  // handle login
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // execute login
      await loginUser(email, password)
      // update fields
      setEmail('')
      setPassword('')
      setErrorMessage('')
      setSuccessMessage('Login Successful!')
      navigate('/')
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.')
      console.error('Login failed:', error)
    }
  }

  return (
      <div>
        <h1>Login Page</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
              {errorMessage && <p>{errorMessage}</p>}
          </form>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
      </div>
  )
}

export default Login