import BaseHtmlDataObject from "./BaseHtmlDataObject";

class InputDataObjects extends BaseHtmlDataObject {
  public placeHolder: string;
  public ref?: React.Ref<HTMLInputElement>;
  constructor(
    id: string,
    name: string,
    placeHolder: string,
    ref?: React.Ref<HTMLInputElement>
  ) {
    super(id, name);
    this.placeHolder = placeHolder;
    if (ref) {
      this.ref = ref;
    }
  }
}

export default InputDataObjects;
