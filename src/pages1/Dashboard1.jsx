import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext1 } from "../context1/UserContext1";

const Dashboard1 = () => {
  const { user } = useContext(UserContext1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome back, {user.email}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard1;
