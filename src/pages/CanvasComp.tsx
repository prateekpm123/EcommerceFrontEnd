import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function GlowingBox({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);

  // Animate the entire group for rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* The main solid Box */}
      <Box args={[1, 1]}>
        <meshStandardMaterial attach="material" color="lightblue" metalness={0.1} roughness={0.5} />
      </Box>

      {/* Outer transparent glowing Box */}
      <Box args={[1.1, 1.1]}>
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={0.3}
          transparent
          side={THREE.BackSide} // Render the inside faces
        />
      </Box>
    </group>
  );
}

function CanvasComp() {
  return (
    <Canvas>
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
        <Bloom luminanceThreshold={0.05} luminanceSmoothing={0.5} height={300} />
      </EffectComposer>

      {/* Orbit controls */}
      <OrbitControls enableDamping={true} dampingFactor={0.1} rotateSpeed={0.5} />

      {/* First Glowing Box */}
      <GlowingBox position={[0, 0, 0]} />

      {/* Second Glowing Box */}
      <GlowingBox position={[3, 0, 0]} />
    </Canvas>
  );
}

export default CanvasComp;