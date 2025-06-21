import React from 'react';
import './Bulb.css';
import StarsRain from '../StarsRain';

const SunMoon = ({ isMoon }) => (
  <>
    <div className="celestial-fixed-container page-fade">
      <div className={`celestial-static ${isMoon ? 'moon' : 'sun'}`}>
        {isMoon && (
          <>
            <div className="crater small" />
            <div className="crater mid" />
            <div className="crater big" />
          </>
        )}
      </div>
    </div>
    {isMoon && <StarsRain />}
  </>
);

export default SunMoon;
