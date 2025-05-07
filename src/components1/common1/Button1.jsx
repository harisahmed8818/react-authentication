const Button1 = ({ type = "button", children, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    style={{ padding: "10px", margin: "10px" }}
  >
    {children}
  </button>
);

export default Button1;
