
import { useProjectContext } from "@/contexts/ProjectContext";
import * as THREE from 'three';

export const useLightningEffect = (start: THREE.Vector3, end: THREE.Vector3): void => {
  const projectContext = useProjectContext();
  projectContext.setLightningEffectContext({start, end});
};
