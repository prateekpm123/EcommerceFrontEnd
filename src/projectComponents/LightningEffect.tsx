// Import necessary modules
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


// Define the props type for LightningEffect
export interface LightningEffectProps {
  start: THREE.Vector3 | undefined;
  end: THREE.Vector3 | undefined;
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

  const points = start && end ? generateLightningVertices(start, end) : [];

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

export default LightningEffect;