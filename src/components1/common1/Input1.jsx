const Input1 = ({ label, type, value, onChange, onBlur }) => (
  <div style={{ marginBottom: "10px" }}>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      style={{ display: "block", padding: "8px", width: "100%" }}
    />
  </div>
);

export default Input1;
