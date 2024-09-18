import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function CanvasComp() {
  return (
    <Canvas>
        <OrbitControls></OrbitControls>
      <mesh>
        <boxGeometry />
      </mesh>
    </Canvas>
  );
}

export default CanvasComp;
