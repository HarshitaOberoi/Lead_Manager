'use client'; // Mark as Client Component for useState, useEffect

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', status: 'New' });
  const [error, setError] = useState('');

  // Fetch leads
  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await axios.get(`${API_URL}/leads`);
        setLeads(res.data);
      } catch (err) {
        setError('Failed to fetch leads');
      }
    }
    fetchLeads();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/leads`, form);
      setForm({ name: '', email: '', status: 'New' });
      const res = await axios.get(`${API_URL}/leads`);
      setLeads(res.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add lead');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="lead-manager">
  <h1>Lead Manager</h1>
  <div className="container">
    {/* Add Lead Form */}
    <div className="form-section">
      <h2><span className="plus-icon">+</span> Add New Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <span className="icon">👤</span> Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter lead name"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="icon">📧</span> Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="icon">✅</span> Status
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="Engaged">Engaged</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed-Won">Closed-Won</option>
              <option value="Closed-Lost">Closed-Lost</option>
            </select>
          </label>
        </div>
        <button type="submit">Add Lead</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>

    {/* Lead List */}
    <div className="leads-section">
      <h2><span className="icon">👥</span> Leads <span className="lead-count">{leads.length}</span></h2>
      {leads.length === 0 ? (
        <p>No leads found.<br />Add your first lead using the form.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.status}</td>
                <td>{new Date(lead.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>

  <style>
    {`
      .lead-manager {
        padding: 20px;
        max-width: 1000px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
      }

      h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .container {
        display: flex;
        gap: 20px;
      }

      .form-section, .leads-section {
        flex: 1;
        background: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .form-section h2 {
        font-size: 18px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .plus-icon {
        font-size: 20px;
        font-weight: bold;
      }

      .form-group {
        margin-bottom: 15px;
      }

      .form-group label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
      }

      .form-group input, .form-group select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
      }

      .form-group input::placeholder {
        color: #aaa;
      }

      .form-group select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: white;
        appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5"><path d="M0 0h10L5 5z" fill="gray"/></svg>');
        background-repeat: no-repeat;
        background-position: right 10px center;
      }

      button {
        width: 100%;
        padding: 10px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
      }

      button:hover {
        background: #0056b3;
      }

      .error {
        color: red;
        font-size: 14px;
        margin-top: 10px;
      }

      .leads-section h2 {
        font-size: 18px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .lead-count {
        background: #ddd;
        border-radius: 50%;
        padding: 2px 8px;
        font-size: 12px;
      }

      .leads-section p {
        color: #666;
        font-size: 14px;
        text-align: center;
      }

      .icon {
        font-size: 16px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th, td {
        padding: 8px;
        border: 1px solid #ddd;
        text-align: left;
        font-size: 14px;
      }

      th {
        background: #f1f1f1;
      }
    `}
  </style>
</div>
  );
}