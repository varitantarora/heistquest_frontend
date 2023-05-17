import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Puzzle = () => {
  const { userId } = useParams();
  const idNumber = parseInt(userId);
  const authContext = useAuth();
  const accessToken = authContext.accessToken;

  const [puzzleId, setPuzzleId] = useState(1);
  const [deadEnd, setDeadEnd] = useState(false);
  const [puzzle, setPuzzle] = useState({});
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [wrongSubmissionCount, setWrongSubmissionCount] = useState(0);

  useEffect(() => {
    const storedPuzzleId = localStorage.getItem(`puzzleId_${idNumber}`);
    if (storedPuzzleId) {
      setPuzzleId(parseInt(storedPuzzleId));
    } else {
      setPuzzleId(1);
    }
  }, []);

  useEffect(() => {
    if (completed) {
      return;
    }
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    axios
      .get(
        `https://heistquest.vercel.app/api/puzzle/${puzzleId}/${idNumber}`,
        config
      )
      .then((response) => setPuzzle(response.data))
      .catch((error) => setError(error));
  }, [puzzleId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    };
    axios
      .post(
        `https://heistquest.vercel.app/api/puzzle/${puzzleId}/${idNumber}`,
        { answer },
        config
      )
      .then((response) => {
        setIsCorrect(response.data);
        if (response.data) {
          setAnswer("");
          setError(null);
          setWrongSubmissionCount(0);
          if (puzzleId === 5) {
            setCompleted(true);
            localStorage.removeItem(`puzzleId_${idNumber}`);
          } else {
            setIsCorrect(false);
            setPuzzleId(puzzleId + 1);
            localStorage.setItem(`puzzleId_${idNumber}`, puzzleId + 1);
          }
        }
        // else {
        //   setWrongSubmissionCount((count) => count + 1);
        //   if (wrongSubmissionCount + 1 === 2) {
        //     setCompleted(true);
        //     localStorage.removeItem(`puzzleId_${idNumber}`);
        //   }
        // }
      })
      .catch((error) => {
        setWrongSubmissionCount((count) => count + 1);
        if (wrongSubmissionCount + 1 == 2) {
          setDeadEnd(true);
          setCompleted(true);
          localStorage.removeItem(`puzzleId_${idNumber}`);
        }
        setAnswer("");
        setIsCorrect(false);
        setError(error);
      });
  };

  const handleStartAgain = () => {
    setPuzzleId(1);
    localStorage.removeItem(`puzzleId_${idNumber}`);
    setCompleted(false);
    setWrongSubmissionCount(0);
  };

  if (!puzzle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-3xl w-full mx-auto relative">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Puzzle Game</h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={handleStartAgain}
          >
            Start Again
          </button>
        </div>

        {completed ? (
          <div className="text-center mt-8 text-lg font-bold text-green-500">
            {deadEnd ? (
              <div className="text-red-500">You have reached a dead end!!!</div>
            ) : (
              <>
                <div className="my-8 flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dsllzbivs/image/upload/v1684254422/heistquest/5_qx7nun.jpg"
                    alt="Puzzle"
                    className="w-128 h-64 object-contain"
                  />
                </div>
                <div>Congratulations! You have completed all puzzles!</div>
              </>
            )}
            <div className="mt-4 flex justify-center">
              <Link to="/leaderboard">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => console.log("Leaderboard clicked")}
                >
                  Show Leaderboard
                </button>
              </Link>
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-4">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="my-8 flex justify-center items-center">
              <img
                src={puzzle.url}
                alt="Puzzle"
                className="w-128 h-64 object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Level {puzzleId}</h2>
            <p className="text-lg mb-8">{puzzle.question}</p>

            <form
              className="flex flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <label className="mb-4">
                Answer:
                <input
                  className="border text-black border-gray-400 rounded-lg px-4 py-2 ml-4 focus:outline-none"
                  type="text"
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                />
              </label>
              {error && (
                <h1 className="text-red-500 mb-4">Wrong answer, try again.</h1>
              )}
              {wrongSubmissionCount >= 1 && (
                <h1 className="text-red-500 mb-4">
                  Incorrect answer. This is your last chance.
                </h1>
              )}
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Puzzle;
