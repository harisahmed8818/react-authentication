import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (userData) => {
    // Save login info in localStorage or context
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(userData));

    // Navigate to the dashboard page
    navigate("/dashboard");
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;
