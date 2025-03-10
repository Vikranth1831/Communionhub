import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";
import Filter from "./Filter";

function Events() {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-15", category: "Charity" },
    { title: "Religious Gathering", date: "2025-04-01", category: "Religious" },
  ]);

  const [filter, setFilter] = useState("");

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const filteredEvents = filter
    ? events.filter((event) => event.category === filter)
    : events;

  return (
    <div className="container mt-4">
      <h2>Upcoming Events</h2>
      <Filter setFilter={setFilter} />
      <EventForm addEvent={addEvent} />
      <EventList events={filteredEvents} />
    </div>
  );
}

export default Events;
