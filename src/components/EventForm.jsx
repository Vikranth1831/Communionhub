import React, { useState } from "react";

function EventForm({ addEvent }) {
  const [event, setEvent] = useState({ title: "", date: "", category: "" });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({ title: "", date: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input type="text" name="title" placeholder="Event Title" className="form-control mb-2" value={event.title} onChange={handleChange} required />
      <input type="date" name="date" className="form-control mb-2" value={event.date} onChange={handleChange} required />
      <select name="category" className="form-control mb-2" value={event.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
  );
}

export default EventForm;
