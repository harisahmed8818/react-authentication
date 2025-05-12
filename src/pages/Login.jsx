import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    onLogin();
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
