import { useEffect } from "react";
import CanvasComp from "../projectComponents/CanvasComp";
import UserAuthenticationController from "@/controller/UserAuthenticationController";
import { MicroServicesHealthStatus } from "@/models/MicroServicesHealthStatus";
import { useProjectContext } from "@/contexts/ProjectContext";

function NodeSection() {
    const projectContext = useProjectContext();

  const checkOnMicroServices = async (): Promise<MicroServicesHealthStatus> => {
    const userAuthController: UserAuthenticationController = new UserAuthenticationController();
    const microServicesHealthStaus: MicroServicesHealthStatus = await userAuthController.checkUpOnMicroServices();
    return microServicesHealthStaus;
  };

  useEffect(() => {
    const getServicesStatus = async () => {
      const serviceStatus = await checkOnMicroServices()
      projectContext.setMicroServicesHealthStatusContext(serviceStatus);
    };
    getServicesStatus();
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
