// import { Route } from "lucide-react";
import SignUp from "./SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Welcome from "./Welcome";
import DefaultLandinManager from "./DefaultLandingPage";
import { LoginPage } from "./LoginPage/LoginPage";
import Home from "./Home";

function MainPageSection() {
  return (
      <div className="h-1/2 w-full bg-inherit">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/welcome" element={<Home />}></Route>
            <Route path="/" element={<DefaultLandinManager />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default MainPageSection;
