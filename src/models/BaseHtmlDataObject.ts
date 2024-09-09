class BaseHtmlDataObject {
    public id: string;
    public name: string;
    public className?: string;
    constructor(id: string, name: string, className?:string) {
        this.id = id;
        this.name = name;
        this.className = className;
    }
}

export default BaseHtmlDataObject;