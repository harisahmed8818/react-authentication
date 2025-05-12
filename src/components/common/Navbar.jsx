import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>

      <div className="nav-links">
        <Link to="/">Home</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
