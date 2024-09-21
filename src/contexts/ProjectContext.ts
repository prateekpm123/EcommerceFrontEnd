import { UserCreatedDto } from "@/dtos/UserCreatedDto";
import { createContext, useContext } from "react";

interface iProjectContext {
    [x: string]: any;
    userContext: UserCreatedDto;
}

export function useProjectContext() {
  const projectContext = createContext<iProjectContext | undefined>(undefined);
  const context = useContext(projectContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
