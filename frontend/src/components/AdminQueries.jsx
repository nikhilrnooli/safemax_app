import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminQueries = () => {
  const [queries, setQueries] = useState([]);

  // Fetch all queries
  const fetchQueries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/queries');
      setQueries(response.data);
    } catch (error) {
      console.error('Error fetching queries', error);
    }
  };

  // Update query status
  const updateStatus = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/queries/${id}/status`, { status });
      setQueries((prev) =>
        prev.map((query) => (query._id === id ? { ...query, status: response.data.status } : query))
      );
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Query Management</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Email</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Message</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Department</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query._id}>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{query.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{query.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{query.message}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{query.department}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">{query.status}</td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm space-x-2">
                  <button
                    onClick={() => updateStatus(query._id, 'Responded')}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                  >
                    Responded
                  </button>
                  <button
                    onClick={() => updateStatus(query._id, 'Resolved')}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                  >
                    Resolve
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

export default AdminQueries;
