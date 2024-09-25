import "./App.css";
import MainPageSection from "./pages/MainPageSection";
import NodeSection from "./pages/NodeSection";

function App() {
  return (
    <div className="bg-slate-700 h-svh w-screen items-center text-center m-auto">
      <NodeSection></NodeSection>
      <MainPageSection></MainPageSection>
    </div>
  );
}

export default App;
