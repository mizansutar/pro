import React from 'react';
import './statemodule.css';

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "100+", label: "Satisfied Clients" },
  { number: "108+", label: "Completed Projects" },
  { number: "90%", label: "Client Retention Rate" }
];

const StatsModule = () => {
  return (
    <div className="container my-5">
      <div className="row text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="sea-card-wrapper">
              <div className="sea-background"></div>

              <div className="sea-bubbles">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} style={{ '--i': i }}></span>
                ))}
              </div>

              {/* Two animated fish */}
              <div className="fish" style={{ animationDelay: `${index}s` }}></div>
              <div className="fish alt" style={{ animationDelay: `${index * 1.5}s` }}></div>

              <div className="sea-content">
                <h3 className="fw-bold">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsModule;
