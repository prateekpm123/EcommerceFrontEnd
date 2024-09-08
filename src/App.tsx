import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-slate-700 h-screen w-screen flex flex-col items-center text-center m-auto">
      <h1 className="text-9xl font-bold underline text-grey-50">Hello world!</h1>
      <Button className="bg-slate-400 m-auto">Testing</Button>
    </div>
  );
}

export default App;
