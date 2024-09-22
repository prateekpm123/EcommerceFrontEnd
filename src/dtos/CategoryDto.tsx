class CategoryDto {
    public id: number;
    public name: string;
    public description: string;
    public constructor(categoryBuillder: CategoryDtoBuilder) {
        this.id = categoryBuillder.getId();
        this.name = categoryBuillder.getName();
        this.description = categoryBuillder.getDescription();
    }
}

export class CategoryDtoBuilder {
    private id: number = 0;
    private name: string = "";
    private description: string = "";

    public getId(): number {
        return this.id;
    }

    public setId(id: number): CategoryDtoBuilder {
        this.id = id;
        return this;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): CategoryDtoBuilder {
        this.name = name;
        return this;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): CategoryDtoBuilder {
        this.description = description;
        return this;
    }

    public build(): CategoryDto {
        return new CategoryDto(this);
    }

}

export default CategoryDto;