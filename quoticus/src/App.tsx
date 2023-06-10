import React from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Authors from './pages/Authors'
import AuthorQuotes from './pages/AuthorQuotes'
import Categories from "./pages/Categories"
import CategoryQuotes from "./pages/CategoryQuotes"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:authorName/quotes" element={<AuthorQuotes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryName/quotes" element={<CategoryQuotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
