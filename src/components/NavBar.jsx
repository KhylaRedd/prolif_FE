import React, { useState } from 'react';
import './NavBar.css';
import logoo from '../assets/logoo.png'
import { Link } from 'react-router-dom';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    // Handle the search logic here
  };

  return (
    <nav className="navv">

      <div className="nav-logo">
        <Link to='/kara'>
          <img src={logoo} alt="Logo" className="logoo" /> 
         </Link>
       </div>
      <div className="nav-search">
           
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="State your interest..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className='links'>
      <Link to="/">Homepage</Link>
      <Link to="/newartist">Declare an Icon</Link>
      <Link to="/artists">Prolifs & Icons</Link>
      
      </div>
    </nav>
  );
}

export default NavBar;
