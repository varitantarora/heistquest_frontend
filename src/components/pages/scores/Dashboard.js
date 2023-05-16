import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

const Dashboard = () => {
  const authContext = useAuth();
  const accessToken = authContext.accessToken;

  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const config = {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      };
    axios
      .get("https://heistquest.vercel.app/api/dashboard",config)
      .then((response) => setUsersData(response.data))
      .catch((error) => setError(error));
  }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

  // if (usersData.length() === 0) {
  //   return <div>Loading...</div>;
  // }
console.log(usersData);
  return (
    <div className="text-gray-700 px-8 py-4">
  <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
  {usersData.map((user) => (
    <div key={user.userId} className="bg-white bg-opacity-30 rounded-lg shadow-md p-8 mb-4">
      <h2 className="text-xl font-bold mb-4">{user.name}</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold mb-2">Total Score:</p>
          <p className="text-gray-800">{user.totalScore}</p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-2">Total Time:</p>
          <p className="text-gray-800">{user.totalTime} minutes</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-8 mb-4">Puzzle Scores:</h3>
      <ul>
        {user.puzzles.map((puzzle) => (
          <li key={puzzle.puzzleId} className="mb-2">
            <div className="flex flex-row justify-between">
              <p className="text-gray-800">Puzzle {puzzle.puzzleId}:</p>
              <div className="flex flex-row">
                <p className="text-gray-800 mr-4">Score: {puzzle.score}</p>
                <p className="text-gray-800">Time: {puzzle.time} seconds</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  );
};

export default Dashboard;
