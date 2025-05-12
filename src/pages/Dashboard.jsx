import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext) || {};
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard container">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name || storedUser?.email}!</p>
      <p>
        This is your dashboard. You are logged in as{" "}
        {user?.email || storedUser?.email}.
      </p>
    </div>
  );
};

export default Dashboard;
