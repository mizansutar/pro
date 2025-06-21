import React, { useEffect, useRef } from 'react';
import './exp.css';

const experiences = [
  {
    title: '💡 Smart Irrigation System (2025)',
    role: 'Solo Developer | C++, Node.js, ESP32',
    points: [
      'Built an IoT-based system to automate water usage.',
      'Integrated soil moisture, temp, and relay modules.',
      'Developed full-stack backend with data encryption and logs.'
    ]
  },
  {
    title: '🌐 ONAC – Hybrid Social + E-Com Platform (Ongoing)',
    role: 'Full Stack Developer | MERN Stack',
    points: [
      'Engineered secure authentication, user feed, and product store.',
      'Integrated cryptocurrency modules and ML content filtering.',
      'Designed mobile-first UI using React and GSAP.'
    ]
  },
  {
    title: '🤖 AquaX Robot – Plastic Cleanup Bot (2025)',
    role: 'AI/ML & Robotics | YOLOv8, Raspberry Pi, Path Planning',
    points: [
      'Implemented autonomous path planning (A*) and image-based plastic detection.',
      'Coded data logging + live dashboard for remote access.',
      'Used ESP32 and Raspberry Pi for coordination.'
    ]
  }
];


const Experience = ({ isMoon }) => {
  const roadRef = useRef(null);

  useEffect(() => {
    const cards = roadRef.current?.querySelectorAll('.realistic-card') || [];

    // Staggered fade slide animation
    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.3}s`;
      card.classList.add('fadeSlide');
    });

    // Tilt on hover
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    });

    // Cursor glow tracking
    const section = roadRef.current;
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    section.appendChild(glow);

    section.addEventListener('mousemove', e => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });

    return () => {
      section.removeEventListener('mousemove', () => {});
      section.removeChild(glow);
    };
  }, []);

  return (
    <section className={`experience-section ${isMoon ? 'moon-mode' : 'sun-mode'}`} ref={roadRef}>
        <hr />
      <h2 className="experience-title">Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="realistic-card" key={index}>
            <h3>{exp.title}</h3>
            <p className="role">{exp.role}</p>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
