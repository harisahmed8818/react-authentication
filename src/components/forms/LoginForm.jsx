import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        onLogin(storedUser);
        setMessage("Login successful!");
        navigate("/dashboard");
      } else {
        setMessage("Invalid email or password");
      }

      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0 || message) {
      const timer = setTimeout(() => {
        setErrors({});
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors, message]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        {message && <p className="form-message">{message}</p>}

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
