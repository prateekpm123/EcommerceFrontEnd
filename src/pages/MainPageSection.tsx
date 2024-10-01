// import { Route } from "lucide-react";
import SignUp from "./SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Welcome from "./Welcome";
import DefaultLandinManager from "./DefaultLandingPage";
import { LoginPage } from "./LoginPage/LoginPage";
import Home from "./Home";

function MainPageSection() {
  return (
      <div className="flex flex-col h-2/3 w-full bg-inherit overflow-y-scroll">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<DefaultLandinManager />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default MainPageSection;
