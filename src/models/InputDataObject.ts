import BaseHtmlDataObject from "./BaseHtmlDataObject";

class InputDataObjects extends BaseHtmlDataObject {
  public placeHolder: string;
  constructor(
    id: string,
    name: string,
    placeHolder: string,
  ) {
    super(id, name);
    this.placeHolder = placeHolder;
   
  }
}

export default InputDataObjects;
