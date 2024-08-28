import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './task.css';

const Leaderboard = () => {
    const [taskData, settaskData] = useState([]);
  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get('https://spirit-kvql.onrender.com/task');
        settaskData(response.data);
        // console.log(response.data);
   
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchTaskData();
  }, []);

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-header">Task Section</div>
            <ul className="leaderboard-list">
                {taskData.map((entry, index) => (
                    <li key={index} className="task-item">
                        <span className="position">{index + 1}.</span>
                        <span className="name">{entry.header}</span>
                        <span className="points">{entry.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Leaderboard;
