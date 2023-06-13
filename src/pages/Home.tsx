import React from "react"
import { Link } from "react-router-dom"
import greekPillars from "../assets/greek-pillars.png"


// Home page
const Home = () => {
    return (
        <div>
          <h1>"Quoticus"</h1>
          <div className="link-container">
            <ul>
              <li className="home-link">
                <Link to="/authors">Authors</Link>
                <br></br>
                <img src={greekPillars} alt="Greek Pillars" className="image-style" />
              </li>
              <li className="home-link">
                <Link to="/categories">Categories</Link>
                <br></br>
                <img src={greekPillars} alt="Greek Pillars" className="image-style" />
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Home