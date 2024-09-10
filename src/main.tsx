import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import App from "./App.tsx";
// import MyAppRouter from "./RouterApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
