import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import { useProjectContext } from "@/contexts/ProjectContext";
import * as THREE from 'three';
import LightningEffect from "./LightningEffect";
import GlowingBox from "./GlowingBox";


function CanvasComp() {
  // const projectContext = useProjectContext();
  // let glowingEffect: number;
  const sourcePos = new THREE.Vector3(5, -5, 10); // Start from the bottom
  const targetPos = new THREE.Vector3(-6, 0, 0);  // Target cube position

  // if(projectContext.microServicesHealthStatusContext?.isUserAuthenticationServiceUp) {
  //   glowingEffect = 0.9;
  // } else {
  //   glowingEffect = 0.1;
  // }
  return (
    <Canvas className="h-full w-full"> 
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

      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]}></PerspectiveCamera>
      {/* <orthographicCamera></orthographicCamera> */}

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
        rotateSpeed={0.2}
      />
      <GlowingBox position={[-6, 0, 0]} glowingEffect={0.9} name={"User Authentication"} ></GlowingBox>
      <GlowingBox position={[-2, 0, 0]} glowingEffect={0.9} name={"Product Service"} ></GlowingBox>
      <GlowingBox position={[2, 0, 0]} glowingEffect={0.9} name={"Search Service"} ></GlowingBox>
      <GlowingBox position={[6, 0, 0]} glowingEffect={0.9} name={"Order Service"} ></GlowingBox>
      <LightningEffect start={sourcePos} end={targetPos} />
    </Canvas>
  );
}

export default CanvasComp;
