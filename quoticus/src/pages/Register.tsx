import React, { useState } from "react";
import { registerUser } from "../api/authApi"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }

    try {
      // Call the registerUser function from authApi.ts
      await registerUser(email, password);
      
      // Registration successful
      setSuccessMessage("Registration successful");
      setErrorMessage("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      // Registration failed
      setErrorMessage("An error occurred during registration.");
      setSuccessMessage("");
      console.error("Registration failed:", error);
    }

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