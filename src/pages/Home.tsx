import React from "react"
import { Link } from "react-router-dom"
import greekPillars from "../assets/greek-pillars.png"

// Home page
const Home = () => {
    return (
        <div>
          <h1>"Quoticus"</h1>
          <div>
            <ul>
              <li>
                <Link to="/authors">Authors</Link>
                <br></br>
                <img src={greekPillars} alt="Greek Pillars" />
              </li>
              <li>
                <Link to="/categories">Categories</Link>
                <br></br>
                <img src={greekPillars} alt="Greek Pillars" />
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Home