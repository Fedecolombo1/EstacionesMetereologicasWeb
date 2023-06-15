import React from 'react'
import './CirculoData.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CirculoData = ({ col, value, text, color}) => {
  return (
    <div className={col} style={{maxWidth: "120px"}}>
        <CircularProgressbar value={value} maxValue={100} text={`${value} ${text}`} strokeWidth={6}
        styles={{
          path: {
            // Path color
            stroke: color,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            // Customize transition animation
            transition: 'stroke-dashoffset 1.8s ease 0s' //1.8s,
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: '#d6d6d6',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the text
          text: {
            // Text color
            fill: color,
            // Text size
            fontSize: '18px',
            fontWeight: 500
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: '#3e98c7',
          }
        }} />
    </div>
  );
};

export default CirculoData;