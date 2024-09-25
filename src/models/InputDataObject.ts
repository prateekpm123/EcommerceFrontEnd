import BaseHtmlDataObject from "./BaseHtmlDataObject";

class InputDataObjects extends BaseHtmlDataObject {
  public placeHolder?: string | undefined;
  public text?: string | undefined;
  constructor(
    id: string,
    name: string,
    placeHolder?: string | undefined,
    text?: string | undefined,
    className?: string | undefined,
  ) {
    super(id, name, className);
    this.placeHolder = placeHolder;
    this.text = text;
  }
}

export default InputDataObjects;
