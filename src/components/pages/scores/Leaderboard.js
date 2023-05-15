import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard=()=> {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("/leaderboard");
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center py-12">
  <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
  <table className="w-full lg:w-3/5 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Time (minutes)</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Score</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user) => (
        <tr key={user.userid} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.totalTime}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.totalScore}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default Leaderboard;
