import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Html } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

interface GlowingBoxInput {
    position: [number, number, number];
    glowingEffect: number;
    text: string;
}

function GlowingBox(inputs: GlowingBoxInput) {
// function GlowingBox({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);

  // Animate the entire group for rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={inputs.position}>
        {/* HTML element in the 3D scene but can be absolutely positioned */}
      <Html position={[1, 2, 0]} style={{ position: 'relative', top: '0px', left: '0px', color: 'white' }}>
        <div style={{ padding: '10px', background: 'rgba(0,0,0,0.7)' }}>
          <p>{inputs.text}</p>
        </div>
      </Html>
      {/* The main solid Box */}
      <Box args={[1, 1]}>
        <meshStandardMaterial
          attach="material"
          color="lightblue"
          roughness={0.3}
        />
      </Box>

      {/* Outer transparent glowing Box */}
      <Box args={[1.1, 1.1]}>
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={inputs.glowingEffect}
          transparent
          side={THREE.BackSide} // Render the inside faces
        />
      </Box>
    </group>
  );
}

export default GlowingBox;
