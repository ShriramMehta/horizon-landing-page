import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('token');
    console.log("log out success")
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard (Only accessible when the user is logged in)</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
