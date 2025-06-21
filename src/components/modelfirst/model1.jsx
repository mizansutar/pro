import React from 'react';
import './model1.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import SceneLightsForModel from './SceneLightsForModel';

function LoadedModel({ scale }) {
  const { scene } = useGLTF('/models/computer_and_laptop.glb');

  scene.position.set(20, -80, -50);               // slightly adjusted
  scene.rotation.set(0, Math.PI / -10, 0);        // -18° Y rotation

  return <primitive object={scene} scale={scale} />;
}

function Model1({ isMoon }) {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cameraPosition = isMobile
    ? [60, 0, -60]
    : isTablet
    ? [50, 0, 300]
    : [50, 0, 330];

  const modelScale = isMobile ? 1.0 : isTablet ? 1.3 : 1.5; // ⬅️ smaller
  const fov = 14;

  return (
    <Canvas className="modelfirst" camera={{ position: cameraPosition, fov }}>
      <SceneLightsForModel isMoon={isMoon} />
      <OrbitControls
        target={[0, -50, 0]}
        enableZoom={true}
        enablePan={true}
        enableRotate={true} // ✅ allow user rotation
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={180}
        maxDistance={700}
      />
      <LoadedModel scale={modelScale} />
    </Canvas>
  );
}

export default Model1;
