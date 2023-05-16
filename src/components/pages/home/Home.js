import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";
import BackgroundImage from "../../UI/BackgroundImage";

function Home() {
  const authContext = useAuth();
  const { userId } = useParams();
  const idNumber = parseInt(userId);

  const logoutHandler = () => {
    authContext.logout(idNumber);
  };

  return (
    <div className="min-h-screen">
      <BackgroundImage opacity={0.5} />
      <header className="flex justify-between items-center py-4 px-8">
        <Link to="/">
          <h1 className="text-5xl font-bold text-yellow-500 mt-4">HeistQuest</h1>
        </Link>
        <div className="flex justify-end">
          {authContext.isLoggedIn ? (
            <>
              <button
                className="mx-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded"
                onClick={logoutHandler}
              >
                Logout
              </button>
              <Link to={`/${idNumber}/puzzle`}>
                <button className="mx-2 bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Start Game
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="mx-2 bg-blue-500 hover:bg-blue-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Admin
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <button className="mx-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
              <Link to="/auth/register">
                <button className="mx-2 bg-blue-500 hover:bg-blue-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Register
                </button>
              </Link>
            </>
          )}
          <Link to="/leaderboard">
            <button className="mx-2 bg-pink-500 hover:bg-pink-600 text-gray-900 font-bold py-2 px-4 rounded">
              Leaderboard
            </button>
          </Link>
        </div>
      </header>
      <main className="text-white py-12 px-8 flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Welcome to HeistQuest!
        </h2>
        <p className="text-lg mb-8 max-w-3xl text-center">
          In this game, you'll be taking on the role of a member of the
          Professor's team, attempting to pull off the biggest heist in history.
          Your mission is to break into the Royal Mint of Spain and print
          billions of euros while avoiding detection from the authorities.
        </p>
        <div className="mb-8 max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">Gameplay Rules:</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              You will have to solve a series of puzzles to progress through the
              game.
            </li>
            <li className="mb-2">Each puzzle will have a time limit.</li>
            <li className="mb-2">
              If you fail to solve a puzzle within the time limit, you will be
              caught and the game will end.
            </li>
            <li className="mb-2">
              You will encounter dead ends in the game. If you reach a dead end,
              you will need to backtrack and find a different path.
            </li>
            <li className="mb-2">
              The game is won when you successfully complete all the puzzles and
              print the desired amount of money.
            </li>
          </ul>
        </div>
        <p className="text-lg mb-8 max-w-3xl text-center">
          Do you have what it takes to be a part of the heist? Put your
          puzzle-solving skills to the test and find out!
        </p>
        <Link to={`/${idNumber}/puzzle`}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Start Game
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
