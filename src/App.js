import React from "react";
import { Route, Routes} from "react-router-dom";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/home/Home";
import {AuthProvider} from "./contexts/AuthContext";
import Puzzle from "./components/pages/puzzle/Puzzle";
import Dashboard from "./components/pages/scores/Dashboard";
import Leaderboard from "./components/pages/scores/Leaderboard";

function App() {
  return (
    <AuthProvider>
        <div className="">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:userId" element={<Home/>}/>
          <Route path="/:userId/puzzle" element={<Puzzle/>} />
          {/* <Route path="/:userId/puzzle/:puzzleId" element={<Puzzle1/>} /> */}
          <Route path="/auth/register" element={<Signup/>}/>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        

        
          </Routes>
          {/* <Puzzle1/> */}
          {/* <Puzzle2/> */}
        </div>
    </AuthProvider>
    
    
  );
}

export default App;
