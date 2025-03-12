import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home-container">
      <h1 className="animate-text">Welcome to CommunionHub</h1>
      <p>Your go-to platform for events and networking!</p>
      <button className="explore-btn" onClick={() => navigate("/events")}>
        Explore Events
      </button>
    </div>
  );
};

export default Home;
