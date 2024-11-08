import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments', error);
    }
  };

  // Update appointment status
  const updateStatus = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/appointments/${id}/status`, { status });
      setAppointments((prev) =>
        prev.map((appointment) => (appointment._id === id ? { ...appointment, status: response.data.status } : appointment))
      );
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Email</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Date</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Comments</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{appointment.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{appointment.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{new Date(appointment.date).toLocaleString()}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{appointment.comments}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{appointment.status}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm space-x-2">
                  <button
                    onClick={() => updateStatus(appointment._id, 'confirmed')}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => updateStatus(appointment._id, 'pending')}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => updateStatus(appointment._id, 'canceled')}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
