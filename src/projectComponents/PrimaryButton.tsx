import ButtonDataObject from "@/models/ButtonDataObject";

const PrimaryButton = (props: ButtonDataObject) => {
  const primaryButtonCls = "relative px-6 py-3 font-bold text-white transition-all duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 shadow-lg hover:shadow-blue-500/50 ";
  const finalCss = primaryButtonCls + props.className;
  return (
    <button className={finalCss} onClick={props.onClick}>
      {props.name || props.children}
    </button>
  );
};

export default PrimaryButton;
