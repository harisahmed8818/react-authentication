
import React, { useState } from "react";
import {
  isRequired,
  isValidEmail,
  isValidPassword,
} from "../../utils/validation";
import { getPasswordStrength } from "../../utils/passwordStrength";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [strength, setStrength] = useState("Weak");

  const validate = () => {
    const newErrors = {};

    if (!isRequired(email)) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!isRequired(password)) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(password)) {
      newErrors.password = "Password must be at least Medium strength";
    }

    if (!isRequired(confirmPassword)) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newUser = { email, password };

      // Get existing users or initialize to empty array
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Push the new user
      existingUsers.push(newUser);

      // Save updated array back to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setMessage("Signup successful! You can now login.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setStrength("Weak");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(getPasswordStrength(value));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
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
            onChange={handlePasswordChange}
          />
          {password && (
            <span className={`strength strength-${strength.toLowerCase()}`}>
              Strength: {strength}
            </span>
          )}
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
