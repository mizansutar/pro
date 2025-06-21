import React, { useEffect, useRef } from 'react';
import './hero.css';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import resume from './resume.pdf';

const Hero = ({ isMoon }) => {
  const containerRef = useRef(null);
  const wordRef = useRef(null);
  const descRef = useRef(null);
const words = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Data Analyst",
  "Data Scientist",
  "Data Engineer",
  "DSA Expert",
  "React Developer",
  "Frontend Developer",
  "Backend Developer",
  "Java Programmer",
  "C# Developer",
  ".NET Engineer",
  "Kotlin Developer",
  "MERN Developer",
  "C++ Architect",
  "ML Coder",
  "UI/UX Thinker",
  "IoT Integrator",
  "Automation Dev",
  "Visionary CSE Mind"
];



const descriptions = {
  "AI Engineer": "I build smart systems that simulate human thinking and decision-making.",
  "Machine Learning Engineer": "I train models to learn from data using deep learning and ML algorithms.",
  "Deep Learning Engineer": "I design and deploy neural networks for vision, NLP, and autonomous systems.",
  "Data Analyst": "I analyze datasets to uncover patterns, trends, and insights that drive decisions.",
  "Data Scientist": "I design predictive models and extract actionable intelligence from complex data.",
  "Data Engineer": "I build and optimize data pipelines and infrastructure for scalable analytics.",
  "DSA Expert": "I solve algorithmic challenges using optimized data structures and logic.",
  "React Developer": "I develop fast, modern UIs using React.js for seamless web experiences.",
  "Frontend Developer": "I build intuitive and responsive interfaces using HTML, CSS, JS, and React.",
  "Backend Developer": "I craft secure and efficient server-side logic using Node.js, Java, and .NET.",
  "Java Programmer": "I develop robust applications using Java for enterprise-scale environments.",
  "C# Developer": "I create desktop and web apps using C# and the Microsoft ecosystem.",
  ".NET Engineer": "I build scalable backend systems and APIs using ASP.NET and C#.",
  "Kotlin Developer": "I write modern Android and backend apps using concise Kotlin code.",
  "MERN Developer": "I build full-stack web apps with MongoDB, Express, React, and Node.js.",
  "C++ Architect": "I build high-performance, system-level software with deep C++ expertise.",
  "ML Coder": "I write ML code that helps software recognize patterns, make decisions, and improve.",
  "UI/UX Thinker": "I design engaging user interfaces with logic, emotion, and clarity.",
  "IoT Integrator": "I connect devices and sensors using ESP32 and real-time cloud APIs.",
  "Automation Dev": "I automate systems to eliminate manual tasks using code and control logic.",
  "Visionary CSE Mind": "I fuse creativity, logic, and engineering to create next-gen software."
};


  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;
    let pauseTime = 1500;

    const type = () => {
      const currentWord = words[wordIndex];
      const fullText = currentWord;
      const desc = descriptions[currentWord];

      if (!isDeleting) {
        wordRef.current.innerText = fullText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === fullText.length) {
          isDeleting = true;
          descRef.current.innerText = desc;
          setTimeout(type, pauseTime);
          return;
        }
      } else {
        wordRef.current.innerText = fullText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(type, isDeleting ? 40 : typingSpeed);
    };

    type();
  }, []);

  return (
    <div ref={containerRef} className={`hero-container ${isMoon ? 'dark-card' : 'light-card'}`}>
      <div className="text-hero">
        <h1 className="typing-line">
          Shaping <span ref={wordRef} className="word-highlight"></span><span className="cursor">|</span>
        </h1>
        <p ref={descRef} className="description">
          Designing intelligent systems that adapt and learn.
        </p>
        <h2>Welcome to My Portfolio</h2>
        <h3>Explore Code, Intelligence, and Design</h3>
        <div className="buttons">
          <a href={resume} className="btn" download>
            <FaDownload /> Download Resume
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
