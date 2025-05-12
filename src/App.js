import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("user");
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
