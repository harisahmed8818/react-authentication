import React from "react";

const AdvancedInput = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  strength,
  toggleShow,
  showPassword,
}) => (
  <div className="input-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
    {name === "password" && (
      <div className="password-tools">
        <span className={`strength ${strength}`}>{strength}</span>
        <button type="button" onClick={toggleShow}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    )}
    {error && <p className="error">{error}</p>}
  </div>
);

export default AdvancedInput;
