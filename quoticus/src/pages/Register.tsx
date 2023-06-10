import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }

    // POST to backend
    fetch("/register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password})
    })
    .then((response) => response.json())
    .then((data) => {
      // response from backend
      if (data.status === 201) {
        // success
        setSuccessMessage(data.message)
        setErrorMessage('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      } else if (data.status === 409) {
        // user with email already exists
        setErrorMessage(data.message)
        setSuccessMessage('')
      }
    })
    .catch((error) => {
      // handle error
      setErrorMessage('An error occurred during registration.')
      setSuccessMessage('')
    })
  }
    return (
        <div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
        </div>
    )
}

export default Register