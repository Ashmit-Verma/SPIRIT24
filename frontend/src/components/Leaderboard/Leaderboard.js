import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('https://spirit-kvql.onrender.com/scoreboard');
        setLeaderboardData(response.data);
        // console.log(response.data);
   
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);


  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">LEADERBOARD</div>
      <ul className="leaderboard-list">
        {leaderboardData.map((entry, index) => (
          <li key={index} className="leaderboard-item">
            <span className="position">{index + 1}.</span>
            <span className="name">{entry.name}</span>
            <span className="points">{entry.points} Points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
