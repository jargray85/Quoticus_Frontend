import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    // variable for logged in user
    const isLoggedIn = true

    // handle logout function to backend
    const handleLogout = async () => {
        try {
            const response = await fetch("/logout", {
                method: "POST",
                credentials: "include"
            })

            if (response.ok) {
                //if successful
                console.log("Logout successful!")
            } else {
                // failed logout
                console.error("Logout failed")
            }
        } catch (error) {
            // network error
            console.error("Logout error:", error)
        }
    }
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