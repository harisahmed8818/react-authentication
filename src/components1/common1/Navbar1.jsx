import { Link } from "react-router-dom";

const Navbar1 = () => (
  <nav
    style={{
      display: "flex",
      gap: "10px",
      padding: "10px",
      background: "#eee",
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);

export default Navbar1;
