// import { Route } from "lucide-react";
import SignUp from "./SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";

function MainPageSection() {
  return (
    <div className="h-1/2 w-full bg-inherit">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainPageSection;
