
class BaseHtmlDataObject {
  public id: string;
  public name: string;
  public className?: string;
  public onClick?: () => (Promise<null> | undefined);

constructor(id: string, name: string, className?: string, onClick?: ()=>Promise<null>) {
    this.id = id;
    this.name = name;
    this.className = className;
    if(onClick) {
        this.onClick = onClick;
    }
  }
}

export default BaseHtmlDataObject;
