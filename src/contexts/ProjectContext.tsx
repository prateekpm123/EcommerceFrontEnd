import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserCreatedDto } from "@/dtos/UserCreatedDto";
import { MicroServicesHealthStatus } from "@/models/MicroServicesHealthStatus";
import { LightningSceneInputs } from "@/projectComponents/LightningScene";

// Define the interface for the Project Context
interface iProjectContext {
  userContext: UserCreatedDto | null;  // null initially, will be filled on sign-in
  setUserContext: (user: UserCreatedDto) => void;
  microServicesHealthStatusContext: MicroServicesHealthStatus | null;
  setMicroServicesHealthStatusContext: (status: MicroServicesHealthStatus) => void;
  lightningSceneInputs: LightningSceneInputs | null;
  setLightningSceneInputs: (inputs: LightningSceneInputs) => void;
}

// Create the User Context
const ProjectContext = createContext<iProjectContext | undefined>(undefined);

// Create a provider component
export const ProjectContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userContext, setUserContext] = useState<UserCreatedDto | null>(null);
  const [microServicesHealthStatusContext, setMicroServicesHealthStatusContext] = useState<MicroServicesHealthStatus | null>(null);
  const [lightningSceneInputs, setLightningSceneInputs] = useState<LightningSceneInputs | null>(null);

  return (
    <ProjectContext.Provider value={{ 
      userContext, setUserContext, 
      microServicesHealthStatusContext, setMicroServicesHealthStatusContext,
      lightningSceneInputs, setLightningSceneInputs
      }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useProjectContext = (): iProjectContext => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectContextProvider");
  }
  return context;
};