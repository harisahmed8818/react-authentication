import React, { useState, useEffect } from "react";
import "./SignupForm.css";

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  showToggle,
  onToggle,
}) => (
  <div className="input-group">
    <label>{label}</label>
    <div className="input-wrapper">
      <input type={type} name={name} value={value} onChange={onChange} />
      {showToggle && (
        <span className="toggle-btn" onClick={onToggle}>
          {type === "password" ? "Show" : "Hide"}
        </span>
      )}
    </div>
    {error && <p className="error">{error}</p>}
  </div>
);

const SignupForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Update errors in real-time
  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const { username, email, password, confirmPass } = values;
    const err = {};
    if (username.trim().length < 3) err.username = "Min 3 characters";
    if (!email.includes("@") || !email.includes("."))
      err.email = "Invalid email";
    if (password.length < 6) err.password = "Min 6 characters";
    if (confirmPass !== password) err.confirmPass = "Passwords do not match";
    return err;
  };

  const getStrength = (p) =>
    p.length >= 8 && /[A-Z]/.test(p) && /\d/.test(p)
      ? "Strong"
      : p.length >= 6
      ? "Medium"
      : "Weak";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log(form);
      alert("Signup Successful!");
    }
  };

  const fields = [
    { label: "Username", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    {
      label: "Password",
      name: "password",
      type: showPassword ? "text" : "password",
      showToggle: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPass",
      type: showPassword ? "text" : "password",
    },
  ];

  const isValid = Object.keys(errors).length === 0;

  return (
    <div className="form-container">
      <h2>Signup Form</h2>
      {fields.map((f) => (
        <InputField
          key={f.name}
          label={f.label}
          name={f.name}
          type={f.type}
          value={form[f.name]}
          onChange={handleChange}
          error={errors[f.name]}
          showToggle={f.showToggle}
          onToggle={() => setShowPassword(!showPassword)}
        />
      ))}
      <div className={`strength ${getStrength(form.password).toLowerCase()}`}>
        Strength: {getStrength(form.password)}
      </div>
      <button className="submit-btn" disabled={!isValid} onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
  );
};

export default SignupForm;
