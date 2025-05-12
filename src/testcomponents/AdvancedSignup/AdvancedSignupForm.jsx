import React, { useState } from "react";
import AdvancedInput from "../AdvancedInput";
import AdvancedButton from "../AdvancedButton";
import "./AdvancedSignupForm.css";

const AdvancedSignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (field, value) => {
    let errors = { ...formErrors };

    if (field === "username") {
      errors.username = value.length < 3 ? "Min 3 characters required" : "";
    }

    if (field === "email") {
      errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? "Invalid email"
        : "";
    }

    if (field === "password") {
      errors.password = value.length < 6 ? "Min 6 characters required" : "";
    }

    if (field === "confirmPassword") {
      errors.confirmPassword =
        value !== formData.password ? "Passwords do not match" : "";
    }

    setFormErrors(errors);
  };

  const getStrength = (password) => {
    if (password.length >= 10) return "strong";
    if (password.length >= 6) return "medium";
    return "weak";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
    if (name === "password")
      validate("confirmPassword", formData.confirmPassword);
  };

  const isFormValid = () => {
    return (
      formData.username.length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    console.log("Form Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <form className="advanced-form" onSubmit={handleSubmit}>
      <h2>Advanced Signup</h2>

      <AdvancedInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        error={formErrors.username}
      />

      <AdvancedInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />

      <AdvancedInput
        label="Password"
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        error={formErrors.password}
        strength={getStrength(formData.password)}
        toggleShow={() => setShowPassword((prev) => !prev)}
        showPassword={showPassword}
      />

      <AdvancedInput
        label="Confirm Password"
        name="confirmPassword"
        type={showPassword ? "text" : "password"}
        value={formData.confirmPassword}
        onChange={handleChange}
        error={formErrors.confirmPassword}
      />

      <AdvancedButton disabled={!isFormValid()} />
      {isSubmitted && <p className="success">Signup successful!</p>}
    </form>
  );
};

export default AdvancedSignupForm;
