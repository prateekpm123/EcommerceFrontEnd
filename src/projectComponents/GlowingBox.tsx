import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Html } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

interface GlowingBoxInput {
    position: [number, number, number];
    glowingEffect: number;
    name: string;
}

function GlowingBox(inputs: GlowingBoxInput) {
// function GlowingBox({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);

  // Animate the entire group for rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={inputs.position}>
      {/* The main solid Box */}
      <Html> 
        <p className="text-sm text-slate-100">{inputs.name}</p>
      </Html>
      <Box args={[1, 1]}>
        <meshStandardMaterial
          attach="material"
          color="lightblue"
          metalness={0.1}
          roughness={0.1}
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
