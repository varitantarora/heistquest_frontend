import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";

function Home() {
  const authContext = useAuth();
  const { userId } = useParams();
  const idNumber = parseInt(userId);
  console.log(idNumber);
  const logoutHandler = () => {
    authContext.logout(idNumber);
  };
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8">
        <Link to="/">
          <h1 className="text-2xl font-bold">HeistQuest</h1>
        </Link>
        <div className="flex justify-end">
          {authContext.isLoggedIn ? (
            <>
              <button className="mx-2" onClick={logoutHandler}>
                Logout
              </button>
              <Link to={`/${idNumber}/puzzle`}>
                <button className="mx-2">Start Game</button>
              </Link>
              <Link to="/dashboard">
                <button className="mx-2">Admin</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <button className="mx-2">Login</button>
              </Link>
              <Link to="/auth/register">
                <button className="mx-2">Register</button>
              </Link>
            </>
          )}
          <Link to="/leaderboard">
            <button className="mx-2">Leaderboard</button>
          </Link>
        </div>
      </header>
      <main>{/* Home page content */}</main>
    </div>
  );
}

export default Home;
