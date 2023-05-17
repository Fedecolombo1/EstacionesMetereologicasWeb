import React, { useEffect, useState } from 'react'
import './CirculoData.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CirculoData = ({ col, value, text }) => {
  const [color, setColor] = useState("#7692E4")
  useEffect(() => {
    if(value > 30 && value < 60){
      setColor("#F99417")
    }else if(value > 60){
      setColor("#E67676")
    }
  },[value])
  return (
    <div className={col}>
        <CircularProgressbar value={value} maxValue={100} text={`${value} ${text}`} strokeWidth={6}
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.50,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 1.8,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors  test
            pathColor: color,
            textColor: color,
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })} />
    </div>
  );
};

export default CirculoData;