import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import SceneLightsForModel from './modelfirst/SceneLightsForModel';

function LoadedModel({ scale }) {
  const { scene } = useGLTF('/models/model2.glb');

  useEffect(() => {
    scene.traverse(obj => {
      if (obj.isMesh) {
        obj.material = new THREE.MeshStandardMaterial({
          
          metalness: 0.3,
          roughness: 0.4,
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -1.5, 0]}
    />
  );
}

function Model2({ isMoon }) {
  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        backgroundColor: 'transparent',
        borderRadius: '12px',
        padding: '10px',
      }}
    >
      <Canvas camera={{ position: [0, 0, 90], fov: 50 }}> {/* ✅ further zoomed out */}
        <SceneLightsForModel isMoon={isMoon} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
        />
        <LoadedModel scale={0.25} />
      </Canvas>
    </div>
  );
}

export default Model2;
