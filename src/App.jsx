import React from 'react'
import {BrowserRouter ,Routes, Route, Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Food from './components/Food.jsx'
import './App.css'

function Navbar(){
  return (
    <nav className="navbar">
      <h2 className="logo">My React App</h2>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/food" className="nav-link">Food</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/recipes" className="nav-link">Recipes</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      {/* <p>This is the part of the Home Page</p> */}
      <div className="card">
        <div className="card-item">
          <h3>Food API</h3>
          <p>Explore food categories</p>
          <Link to="/food" className='btn'>Go to Food</Link>
        </div>
      </div>
    </div>
  );
}

function Placeholder({title}){
  return (
  <div>
    <h2>{title} Page</h2>
    <p>Coming soon...</p>
  </div>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/food" element={<Food/>}></Route>
          <Route path="/products" element={<Placeholder title="Products"/>}></Route>
          <Route path="/movies" element={<Placeholder title="Movies"/>}></Route>
          <Route path="/recipes" element={<Placeholder title="Recipes"/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
