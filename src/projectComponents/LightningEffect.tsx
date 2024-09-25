// Import necessary modules
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GlowingBox from './GlowingBox';
import { useProjectContext } from '@/contexts/ProjectContext';

// Define the props type for LightningEffect
export interface LightningEffectProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
}

function LightningEffect({ start, end }: LightningEffectProps) {
  const ref = useRef<THREE.Line | null>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Generate random vertices between start and end points
  const generateLightningVertices = (start: THREE.Vector3, end: THREE.Vector3, segments: number = 20) => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const lerpFactor = i / segments;
      const randomDisplacement = (Math.random() - 0.5) * 0.3; // Random displacement for jagged effect
      const point = new THREE.Vector3().lerpVectors(start, end, lerpFactor);
      point.x += randomDisplacement;
      point.y += randomDisplacement;
      point.z += randomDisplacement;
      points.push(point);
    }
    return points;
  };

  const points = generateLightningVertices(start, end);

  useFrame(() => {
    // Increment progress for animation
    if (progress < 1) {
      setProgress((prev) => Math.min(prev + 0.02, 1));
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }

    // Update vertices to grow lightning
    const visiblePoints = points.slice(0, Math.floor(points.length * progress));
    if (ref.current) {
      ref.current.geometry.setFromPoints(visiblePoints);
    }
  });

  return isVisible ? (
    <primitive object={new THREE.Line} ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="white" linewidth={10} />
    </primitive>
  ): null;
}

// Define the Scene component
export function LightningScene() {
  const sourcePos = new THREE.Vector3(0, 0, 0); // Start from the bottom
  const targetPos = new THREE.Vector3(0, 5, 0);  // Target cube position
  const projectContext = useProjectContext();
  let userAuthGlow: number;
  let productServiceGlow: number;
  if(projectContext.microServicesHealthStatusContext?.isUserAuthenticationServiceUp) {
    userAuthGlow = 0.9;
  } else {
    userAuthGlow = 0.1;
  }
  if(projectContext.microServicesHealthStatusContext?.isProductServiceUp) {
    productServiceGlow = 0.9;
  } else {
    productServiceGlow = 0.1;
  }
  return (
    <>
      {/* Target Cube */}
      <mesh position={targetPos}>
        <GlowingBox position={[0, 0, 0]} glowingEffect={userAuthGlow} name={"User Authentication"} />
      </mesh>

      {/* Lightning Effect */}
      <LightningEffect start={sourcePos} end={targetPos} />

      {/* Source (Start Point for Lightning) */}
      <mesh position={sourcePos}>
        <GlowingBox position={[0, 0, 0]} glowingEffect={productServiceGlow} name={"Product Service"}/>
      </mesh>
    </>
  );
}

export default LightningEffect;