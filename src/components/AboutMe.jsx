import React, { useEffect, useRef, useState } from 'react';
import './AboutMe.css';

const AboutMe = ({ isMoon }) => {
  const repelRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ top: '50%', left: '50%' });

  const skills = [
    { name: 'AI / ML / DL', level: 85 },
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 88 },
    { name: '.NET / C#/ JAVA', level: 80 },
    { name: 'App Development', level: 78 }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ top: `${y}px`, left: `${x}px` });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="about-me-section" id="about">
      <div
        ref={containerRef}
        className={`about-me-container ${isMoon ? 'moon-mode' : 'sun-mode'}`}
      >
        <div
          ref={repelRef}
          className="about-me-mouse-repel"
          style={{ top: mousePos.top, left: mousePos.left }}
        />

        <div className="about-me-content">
          <div className="about-me-left">
            <h2>⚙️ About Me</h2>
            <p>
              I’m Nicky, a Computer Science student pushing limits in AI, full-stack dev, and smart systems. I blend deep tech with real-world applications — solo.
            </p>
            <p>
              I build scalable, intelligent systems using MERN stack, .NET, and mobile frameworks, powered by C++, Python, and data-driven logic.
            </p>
            <h3>🚀 Current Focus:</h3>
            <ul>
              <li>ONAC Project – Social & Commerce Hybrid</li>
              <li>AI Assistant – Blender + Python</li>
              <li>Smart Bot – Sea Plastic Cleanup</li>
            </ul>
            <p className="about-quote">🔗 Let’s Build the Future</p>
            <p className="about-quote"><em>"Code like it matters—because it does."</em></p>
          </div>

          <div className="about-me-right">
            <h3>🧠 My Core Skill Areas</h3>
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-bar">
                <span>{skill.name}</span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{
                      '--level': `${skill.level}%`,
                      animationDelay: `${idx * 0.4}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
