import InputDataObjects from "@/models/InputDataObject";

const Input = (props: InputDataObjects) => {
  return (
    <div className="grid w-full max-w-sm items-left gap-1.5 pb-6">
      <p typeof={props.name} className="text-slate-100 text-left">
        {props.name}
      </p>
      <input className="pt-1 pb-1 pl-2 bg-slate-900 text-gray-900" type={props.name} id={props.id} placeholder={props.name} />
    </div>
  );
};

export default Input;
