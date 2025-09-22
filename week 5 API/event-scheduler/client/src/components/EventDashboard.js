import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import EventList from './EventList';
import './EventDashboard.css';

export default function EventDashboard() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (data) => {
    try {
      await axios.post('/api/events', data);
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="event-form">
        <EventForm onAdd={addEvent} />
      </div>
      <div className="event-list">
        <EventList events={events} onDelete={deleteEvent} />
      </div>
    </div>
  );
}
