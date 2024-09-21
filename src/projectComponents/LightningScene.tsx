import { useState } from 'react';
import * as THREE from 'three';
import GlowingBox from './GlowingBox';
import { useProjectContext } from '@/contexts/ProjectContext';
import LightningEffect from './LightningEffect';
// import { Nodes } from '@/models/Nodes';

export interface LightningSceneInputs {
    sourcePos: THREE.Vector3;
    targetPos: THREE.Vector3;
    showLightning: [boolean, (status: boolean)=>void];
}

export class NodesPositions {
    static CLIENT = new THREE.Vector3(0, 5, 0);
    static USERAUTHENTICATION = new THREE.Vector3(0, 0, 0);
}


// Define the Scene component
export function LightningScene({sourcePos, targetPos}: LightningSceneInputs) {
    const projectContext = useProjectContext();
    const [isAnimating] = useState(true);  
    const [showLightning, setShowLightning]= useState(true); // using this to stop the animation
    let glowingEffect: number;
    if(projectContext.microServicesHealthStatusContext?.isUserAuthenticationServiceUp) {
      glowingEffect = 0.9;
    } else {
      glowingEffect = 0.1;
    }

  
    const handleAnimationComplete = () => {
      setShowLightning(false);
    }
  
    return (
      <>
        {/* Target Cube */}
        <mesh position={targetPos}>
          <GlowingBox position={[0, 0, 0]} glowingEffect={glowingEffect} text={"Client"} />
        </mesh>
  
        {/* Lightning Effect */}
        {showLightning && <LightningEffect start={sourcePos} end={targetPos} isAnimating={isAnimating} onAnimationComplete={handleAnimationComplete}/>}
  
        {/* Source (Start Point for Lightning) */}
        <mesh position={sourcePos}>
          <GlowingBox position={[0, 0, 0]} glowingEffect={glowingEffect} text={"UserAuth Server"}/>
        </mesh>
      </>
    );
  }