
class BaseHtmlDataObject {
  public id: string;
  public name: string;
  public className?: string;
  public onClick?: () => void;

  constructor(id: string, name: string, className?: string, onClick?: ()=>void) {
    this.id = id;
    this.name = name;
    this.className = className;
    if(onClick) {
        this.onClick = onClick;
    }
  }
}

export default BaseHtmlDataObject;
