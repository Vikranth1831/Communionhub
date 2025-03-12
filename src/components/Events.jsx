import React, { useState } from "react";

const Events = () => {
  // Event List State
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-06-15",
      time: "10:00 AM",
      location: "New York City",
      description: "A global tech conference with industry leaders.",
      category: "Technology",
      registered: false
    },
    {
      id: 2,
      title: "Startup Pitch Night",
      date: "2025-07-20",
      time: "6:00 PM",
      location: "San Francisco",
      description: "Network with investors and showcase your startup.",
      category: "Business",
      registered: false
    }
  ]);

  // Form State for Adding New Events
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: ""
  });

  // Handle Input Change in Form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle Add Event Button Click
  const handleAddEvent = (e) => {
    e.preventDefault(); // Prevent page reload

    // Ensure all fields are filled
    if (
      newEvent.title.trim() === "" ||
      newEvent.date.trim() === "" ||
      newEvent.time.trim() === "" ||
      newEvent.location.trim() === "" ||
      newEvent.description.trim() === "" ||
      newEvent.category.trim() === ""
    ) {
      alert("Please fill in all fields!");
      return;
    }

    // Add new event to the list
    setEvents([
      ...events,
      { id: events.length + 1, ...newEvent, registered: false }
    ]);

    // Clear input fields
    setNewEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      category: ""
    });
  };

  // Handle Register Button Click (for individual events)
  const handleRegister = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, registered: true } : event
      )
    );
    alert("You have successfully registered for the event!");
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <p>Explore all our upcoming events here!</p>

      {/* Event List */}
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p>{event.description}</p>
            {event.registered ? (
              <p style={{ color: "green", fontWeight: "bold" }}>✅ Registered</p>
            ) : (
              <button className="register-btn" onClick={() => handleRegister(event.id)}>
                Register
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Event Registration Form */}
      <div className="event-form">
        <h2>Add a New Event</h2>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={newEvent.description}
          onChange={handleInputChange}
        ></textarea>
        <select name="category" value={newEvent.category} onChange={handleInputChange}>
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
          <option value="Education">Relegious</option>
        </select>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default Events;
