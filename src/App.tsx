import "./App.css";
import MainPageSection from "./pages/MainPageSection";
// import NodeSection from "./pages/NodeSection";

function App() {
  return (
    <div className="bg-slate-700 h-screen w-screen flex flex-col items-center text-center m-auto">
      {/* <NodeSection></NodeSection> */}
      <MainPageSection></MainPageSection>
    </div>
  );
}

export default App;
