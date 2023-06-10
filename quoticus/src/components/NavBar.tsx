import React, { useState } from "react"
import { Link } from "react-router-dom"
import { registerUser, loginUser, logoutUser } from '../api/authApi'

interface NavbarProps {
    isLoggedIn: boolean,
    onLogout: () => void
}


const NavBar = ({isLoggedIn, onLogout}: NavbarProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    // handle logout function to backend
    const handleLogout = async () => {
        try {
            await logoutUser()
            onLogout()
        } catch (error) {
            console.error("Logout failed:", error)
            console.log(error)
        }
    }

    // // handle registration 
    // const handleRegister = async () => {
    //     try {
    //         // execture registration
    //         await registerUser(email, password)
    //         // update fields
    //         setEmail('')
    //         setPassword('')
    //         setConfirmPassword('')
    //     } catch (error) {
    //         console.error('Registration failed:', error)
    //         console.log(error)
    //     }
    // }

    // // handle login
    // const handleLogin = async () => {
    //     try {
    //         // execute login
    //         await loginUser(email, password)
    //         // update fields
    //         setEmail('')
    //         setPassword('')
    //     } catch (error) {
    //         console.error('Login failed:', error)
    //         console.log(error)
    //     }
    // }

    return (
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
    )
}

export default NavBar