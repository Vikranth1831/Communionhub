import React from "react";
import "./EventList.css";

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Category:</strong> {event.category}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
