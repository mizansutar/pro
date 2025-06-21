import React, { useEffect, useRef } from 'react';
import './skill.css';

const categories = {
  'Programming Languages': [
    { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 93 },
    { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 90 },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 89 },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 85 },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 88 },
    { name: 'Kotlin', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', level: 77 },
    { name: 'C#', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 82 }
  ],

  'AI / Machine Learning': [
    { name: 'NumPy', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', level: 80 },
    { name: 'Pandas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', level: 78 },
    { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', level: 75 },
    { name: 'Scikit-learn', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', level: 70 },
    { name: 'Deep Learning (DL)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 72 }
  ],

  'Frontend Development': [
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 92 },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 88 },
    { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
    { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 80 }
  ],

  'Backend Development': [
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 82 },
    { name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 78 },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 75 },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 72 },
    { name: 'SQL Server', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', level: 76 },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 70 }
  ],

  '.NET Technologies': [
    { name: '.NET Core', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', level: 78 },
    { name: 'ASP.NET', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', level: 76 },
    { name: 'Entity Framework', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg', level: 72 }
  ],

  'IoT & Embedded Systems': [
    { name: 'Arduino', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', level: 90 },
    { name: 'ESP32', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 85 },
    { name: 'UART / Serial Comm', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', level: 80 },
    { name: 'HTTP / MQTT Protocols', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', level: 70 }
  ],

  'Developer Tools': [
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 85 },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 83 },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 75 },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 90 }
  ]
};


const SkillCards = ({ isMoon }) => {
  const ref = useRef();

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.skill-card') || [];
    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.3}s`;
      card.classList.add('fadeSlide');
    });

    const fills = [...document.querySelectorAll('.loading-progress')];
    fills.forEach((el, i) => {
      const level = +el.getAttribute('data-level');
      const duration = 1000 + level * 10; // e.g. 93 → 1930ms

      setTimeout(() => {
        el.style.transition = `stroke-dasharray ${duration}ms ease-in-out`;
        el.style.setProperty('--fill', `${level}`);
      }, i * 400); // each arc triggers after previous
    });
  }, []);



  return (
    <section className={`skill-section ${isMoon ? 'moon-mode' : 'sun-mode'}`} ref={ref} id='skills'>
      <hr />
      <h2 className="skill-title">Skills</h2>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="overlay-glow"></div>
                <img src={skill.img} alt={skill.name} className="skill-icon-image" />
                <div className="arc">
                  <svg viewBox="0 0 36 36">
                    <defs>
                      <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="100%" stopColor="#0040ff" />
                      </linearGradient>
                    </defs>
                    <circle className="bg" cx="18" cy="18" r="15.9155" />
                    <circle
                      className="fill loading-progress"
                      data-level={skill.level}
                      cx="18"
                      cy="18"
                      r="15.9155"
                    />
                  </svg>
                  <span className="arc-text">{skill.level.toFixed(2)}%</span>
                </div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillCards;
