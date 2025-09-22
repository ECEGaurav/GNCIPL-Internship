// client/src/components/EventList.js


import React from 'react';

function fmtDate(d) {
  try {
    return new Date(d).toLocaleString();
  } catch (e) {
    return d;
  }
}

export default function EventList({ events, onDelete }) {
  if (!events || events.length === 0) return <p>No events yet</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {events.map(ev => (
        <li key={ev._id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '10px',
          background: '#fff',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 8px' }}>{ev.title}</h3>
          <div><strong>Start:</strong> {fmtDate(ev.startDate)}</div>
          <div><strong>End:</strong> {fmtDate(ev.endDate)}</div>
          {ev.location && <div><strong>Location:</strong> {ev.location}</div>}
          {ev.description && <p>{ev.description}</p>}
          <button
            onClick={() => onDelete(ev._id)}
            style={{
              marginTop: '8px',
              padding: '6px 10px',
              background: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
