// import { Route } from "lucide-react";
import SignUp from "./SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";
import { ProjectContextProvider } from "@/contexts/ProjectContext";
import DefaultLandinManager from "./DefaultLandingPage";

function MainPageSection() {
  return (
    <ProjectContextProvider>
      <div className="h-1/2 w-full bg-inherit">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/" element={<DefaultLandinManager />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ProjectContextProvider>
  );
}

export default MainPageSection;
