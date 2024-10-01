// Import necessary modules
import * as THREE from 'three';
import GlowingBox from './GlowingBox';
import { useProjectContext } from '@/contexts/ProjectContext';
import LightningEffect from './LightningEffect';


// Currently NOT using this anywhere.

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
