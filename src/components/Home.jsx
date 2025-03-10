import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="animate-text">Connecting People Across Faiths & Interests</h1>
      <p>Bringing communities together through shared events.</p>
      <Link to="/events" className="btn btn-success">Explore Events</Link>
    </div>
  );
}

export default Home;
