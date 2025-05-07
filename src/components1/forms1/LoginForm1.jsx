import { useState, useContext, useEffect } from "react";
import Input1 from "../common1/Input1";
import Button1 from "../common1/Button1";
import { useNavigate } from "react-router-dom";
import { UserContext1 } from "../../context1/UserContext1";

const LoginForm1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext1);

  useEffect(() => {
    if (email || password) setTyping(true);
    const timer = setTimeout(() => setTyping(false), 1000);
    return () => clearTimeout(timer);
  }, [email, password]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return setError("All fields are required");

    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <Input1
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input1
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {typing && <small>Typing...</small>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button1 type="submit">Login</Button1>
    </form>
  );
};

export default LoginForm1;
