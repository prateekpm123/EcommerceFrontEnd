import { useEffect, useState } from "react";
import CanvasComp from "../projectComponents/CanvasComp";
import UserAuthenticationController from "@/controller/UserAuthenticationController";
import { MicroServicesHealthStatus } from "@/models/MicroServicesHealthStatus";
import { useProjectContext } from "@/contexts/ProjectContext";
import { NodesPositions } from "@/projectComponents/LightningScene";

function NodeSection() {
  const projectContext = useProjectContext();
  const [showLightning, setShowLightning] = useState(true);

  const checkOnMicroServices = async (): Promise<MicroServicesHealthStatus> => {
    const userAuthController: UserAuthenticationController = new UserAuthenticationController();
    const microServicesHealthStaus: MicroServicesHealthStatus = await userAuthController.checkUpOnMicroServices();
    return microServicesHealthStaus;
  };

  // On Node Section render we are doing a health check on the backend services
  useEffect(() => {
    const getServicesStatus = async () => {
      const sourcePos = NodesPositions.CLIENT;
      const targetPos = NodesPositions.USERAUTHENTICATION;
      setShowLightning(true);
      projectContext.setLightningSceneInputs({sourcePos, targetPos, showLightning: [showLightning, setShowLightning]});
      setShowLightning(false);
      const serviceStatus = await checkOnMicroServices()
      projectContext.setMicroServicesHealthStatusContext(serviceStatus);
    };

    getServicesStatus();

    // Making periodic health checks
    const frequentHealthCheck = setInterval(() => {
      getServicesStatus();
    },1000);

    return () => clearInterval(frequentHealthCheck);

    }, []);
  return (
    <div
      className="h-1/3 w-full flex bg-slate-700 border-solid border-y-2 border-y-slate-500 "
    >
      <h2 className="text-3xl flex text-slate-100 pt-3">Node section</h2>
      <CanvasComp></CanvasComp>
    </div>
  );
}

export default NodeSection;
