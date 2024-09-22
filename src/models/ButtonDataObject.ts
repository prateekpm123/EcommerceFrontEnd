import BaseHtmlDataObject from "./BaseHtmlDataObject";

class ButtonDataObject extends BaseHtmlDataObject {
  children?: string;
  constructor(id: string, name: string, children?: string) {
    super(id, name);
    if(children) {
      this.children = children;
    }
  }
}

export default ButtonDataObject;
