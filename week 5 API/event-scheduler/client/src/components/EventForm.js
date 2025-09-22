// client/src/components/Eventform.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EventForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !startDate || !endDate) {
      return alert('Title, start date & end date are required');
    }
    if (startDate > endDate) {
      return alert('End time must be after start time');
    }

    onAdd({ title, startDate, endDate, location, description });

    // reset form
    setTitle('');
    setStartDate(null);
    setEndDate(null);
    setLocation('');
    setDescription('');
  };

  return (
    <form
      onSubmit={submit}
      style={{
        display: 'grid',
        gap: '12px',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        background: '#fafafa',
      }}
    >
      <input
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px' }}
      />

      <div style={{ display: 'flex', gap: '12px' }}>
        <label style={{ flex: 1 }}>
          Start:
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm"
            placeholderText="Select start date & time"
            style={{ width: '100%', padding: '6px' }}
          />
        </label>

        <label style={{ flex: 1 }}>
          End:
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm"
            placeholderText="Select end date & time"
            style={{ width: '100%', padding: '6px' }}
          />
        </label>
      </div>

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: '8px' }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '8px', minHeight: '60px' }}
      />

      <button
        type="submit"
        style={{
          padding: '10px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Add Event
      </button>
    </form>
  );
}
