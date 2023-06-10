import React from "react"
import { Link } from "react-router-dom"

// Home page
const Home = () => {
    return (
        <div>
          <h1>"Quoticus"</h1>
          <div>
            <ul>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Home