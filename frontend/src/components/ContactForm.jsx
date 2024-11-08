import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', comments: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', form);
      alert('Appointment scheduled successfully');
    } catch (error) {
      alert('Error scheduling appointment');
    }
  };

  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Schedule a Consultation</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="date"
          type="datetime-local"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="comments"
          placeholder="Comments"
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
