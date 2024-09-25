import InputDataObjects from "@/models/InputDataObject";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputDataObjects>((props: InputDataObjects, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={"grid w-full max-w-sm items-left gap-1.5 pb-6" + props.className}>
      <p typeof={props.name} className="text-slate-100 text-left">
        {props.text}
      </p>
      <input className="pt-1 pb-1  pl-2 bg-slate-900 text-gray-100" type={props.name} id={props.id} placeholder={props.placeHolder} ref={ref} />
    </div>
  );
});
  
export default Input;
