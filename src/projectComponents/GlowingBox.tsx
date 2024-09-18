import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
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


export default GlowingBox;