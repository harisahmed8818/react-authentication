import { useState, useContext, useEffect } from "react";
import Input1 from "../common1/Input1";
import Button1 from "../common1/Button1";
import { useNavigate } from "react-router-dom";
import { UserContext1 } from "../../context1/UserContext1";
import { validateEmail, validatePassword } from "../../utils1/validation1";

const SignupForm1 = () => {
  const [email, setEmail] = useState(
    localStorage.getItem("signupEmail1") || ""
  );
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [typing, setTyping] = useState(false);
  const navigate = useNavigate();
  const { setUser1: setUser } = useContext(UserContext1); 

  useEffect(() => {
    localStorage.setItem("signupEmail1", email);
  }, [email]);

  useEffect(() => {
    if (password) {
      setTyping(true);
      const timer = setTimeout(() => {
        const validationErrors = [];

        if (!validatePassword(password)) {
          validationErrors.push(
            "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character."
          );
        }

        setErrors(validationErrors);
        setTyping(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = [];

    if (!email || !password) formErrors.push("All fields are required");
    if (!validateEmail(email)) formErrors.push("Invalid email format");
    if (!validatePassword(password)) formErrors.push("Invalid password format");

    if (formErrors.length > 0) {
      setErrors(formErrors);
      return;
    }

    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {typing && <small>Validating...</small>}
      {errors.map((err, i) => (
        <p key={i} style={{ color: "red" }}>
          {err}
        </p>
      ))}
      <Button1 type="submit">Signup</Button1>
    </form>
  );
};

export default SignupForm1;
