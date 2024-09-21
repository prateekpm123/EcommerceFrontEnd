import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import GlowingBox from "@/projectComponents/GlowingBox";    
import { useProjectContext } from "@/contexts/ProjectContext";
import * as THREE from 'three';
import LightningEffect, { Scene } from "./LightningEffect";


function CanvasComp() {
  const projectContext = useProjectContext();
  let glowingEffect: number;
  const sourcePos = new THREE.Vector3(0, -1, 0); // Start from the bottom
  const targetPos = new THREE.Vector3(0, 1, 0);  // Target cube position

  if(projectContext.microServicesHealthStatusContext?.isUserAuthenticationServiceUp) {
    glowingEffect = 0.9;
  } else {
    glowingEffect = 0.1;
  }
  return (
    <Canvas className="h-fit"> 
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      {/* Directional Light */}
      <directionalLight
        color="white"
        intensity={1}
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* SpotLight for more dramatic lighting */}
      <spotLight
        intensity={0.7}
        position={[5, 10, 5]}
        angle={0.2}
        penumbra={1}
        castShadow
      />

      {/* Glow Effect */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.05}
          luminanceSmoothing={0.5}
          height={300}
        />
      </EffectComposer>

      {/* Orbit controls */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />

      {/* First Glowing Box */}
      <GlowingBox position={[-2, 0, 0]} glowingEffect={glowingEffect} />

      {/* Second Glowing Box */}
      <GlowingBox position={[2, 0, 0]} glowingEffect={glowingEffect}/>

      {/* <LightningEffect start={sourcePos} end={targetPos}></LightningEffect> */}
      <Scene></Scene>
    </Canvas>
  );
}

export default CanvasComp;
