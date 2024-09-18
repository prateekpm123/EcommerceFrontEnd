import CanvasComp from "./CanvasComp";

function NodeSection() {
    return(
        <div className="h-1/3 w-full bg-slate-700 border-solid border-y-2 border-y-slate-500 ">
            <h2 className="text-3xl text-slate-100 pt-3">Node section</h2>
            <CanvasComp></CanvasComp>
        </div>
    )
}

export default NodeSection;