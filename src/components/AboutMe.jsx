import React, { useEffect, useRef, useState } from 'react';
import './AboutMe.css';

const AboutMe = ({ isMoon }) => {
  const repelRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ top: '50%', left: '50%' });

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'AI & ML', level: 70 }
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
    <section className="about-me-section">
      <div
        ref={containerRef}
        className={`about-me-container ${isMoon ? 'moon-mode' : 'sun-mode'}`}
      >
        <div
          ref={repelRef}
          className="about-me-mouse-repel"
          style={{ top: mousePos.top, left: mousePos.left }}
        />

        <div className="about-me-bubbles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} style={{ '--i': i }}></span>
          ))}
        </div>

        <div className="about-me-water realistic-water"></div>

        <div className="about-me-content">
          <div className="about-me-left">
            <h2>⚙️ About Me</h2>
            <p>
              I’m Nicky, an engineering student in Computer Science, obsessed with exploring the edge of what’s possible.
              I build systems that blend AI, IoT, Web, and Blockchain—not for hype, but for impact.
            </p>
            <p>
              From creating smart irrigation systems to designing next-gen social platforms, I architect full-stack solutions solo,
              using tools like React, Node.js, MongoDB, C++, and ESP32.
            </p>
            <p>
              I'm not just writing code—I’m building projects that solve real-world problems, with clean UX, fast performance, and scalable backends.
            </p>
            <h3>🚀 Current Focus:</h3>
            <ul>
              <li>ONAC Project (Social + E-commerce Hybrid)</li>
              <li>AI-powered personal assistant (Python + Blender)</li>
              <li>Smart Robots (Plastic cleanup bots using YOLO & path planning)</li>
            </ul>
            <p className="about-quote">🔗 Let’s Build the Future</p>
            <p className="about-quote"><em>"Code like it matters—because it does."</em></p>
          </div>

          <div className="about-me-right">
            <h3>🧠 My Skills</h3>
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-bar">
                <span>{skill.name}</span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{
                      '--level': `${skill.level}%`,
                      animationDelay: `${idx * 1.5}s` // stagger delay
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
