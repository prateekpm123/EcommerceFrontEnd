import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import { useProjectContext } from "@/contexts/ProjectContext";
import { LightningScene, NodesPositions } from "./LightningScene";
import { useProjectContext } from "@/contexts/ProjectContext";
import { useState } from "react";

function CanvasComp() {
  const projectContext = useProjectContext();
  const defaultShowLightningState = useState(false);
  return (
    <Canvas className="h-fit"> 
      {/* Ambient Light */}
      <ambientLight intensity={1} />

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

      <LightningScene 
        sourcePos={projectContext.lightningSceneInputs?.sourcePos || NodesPositions.CLIENT} 
        targetPos={projectContext.lightningSceneInputs?.targetPos || NodesPositions.USERAUTHENTICATION}
        showLightning={projectContext.lightningSceneInputs?.showLightning || defaultShowLightningState}
      ></LightningScene>
    </Canvas>
  );
}

export default CanvasComp;
