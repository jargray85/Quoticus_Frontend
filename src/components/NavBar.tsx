import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from '../api/authApi'

interface NavbarProps {
    isLoggedIn: boolean,
    onLogout: () => void
}


const NavBar = ({isLoggedIn, onLogout}: NavbarProps) => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    

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

    

    return (
        <nav>
      <ul>
        <li className="nav-home">
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li className="nav-register">
              <Link to="/register">Register</Link>
            </li>
            <li className="nav-login">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li className="nav-account">
              <Link to="/account">Account</Link>
            </li>
            <li className="nav-logout">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
    )
}

export default NavBar