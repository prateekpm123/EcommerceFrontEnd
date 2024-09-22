import CategoryDto, { CategoryDtoBuilder } from "./CategoryDto";

class ProductDto {
    public id: number;
    public name: string;
    public imageUrl: string;
    public description: string;
    public price: number;
    public category: CategoryDto;
    public constructor(productDtoBuilder: ProductDtoBuilder) {
        this.id = productDtoBuilder.getId();
        this.name = productDtoBuilder.getName();
        this.imageUrl = productDtoBuilder.getImageUrl();
        this.description = productDtoBuilder.getDescription();
        this.price = productDtoBuilder.getPrice();
        this.category = productDtoBuilder.getCategory();
    }
}

export class ProductDtoBuilder {
    private id: number = 0;
    private name: string = "";
    private imageUrl: string = "";
    private description: string = "";
    private price: number = 0;
    private category!: CategoryDto;

    public setId(id: number): ProductDtoBuilder {
        this.id = id;
        return this;
    }

    public setName(name: string): ProductDtoBuilder {
        this.name = name;
        return this;
    }

    public setImageUrl(imageUrl: string): ProductDtoBuilder {
        this.imageUrl = imageUrl;
        return this;
    }

    public setDescription(description: string): ProductDtoBuilder {
        this.description = description;
        return this;
    }

    public setPrice(price: number): ProductDtoBuilder {
        this.price = price;
        return this;
    }

    public setCategory(category: CategoryDto): ProductDtoBuilder {
        this.category = new CategoryDtoBuilder()
            .setId(category.id)
            .setDescription(category.description)
            .setName(category.name)
            .build();
        return this;
    }

    public build(): ProductDto {
        return new ProductDto(this);
    }
    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public  getImageUrl(): string {
        return this.imageUrl;
    }

    public  getDescription(): string {
        return this.description;
    }

    public  getPrice(): number {
        return this.price;
    }

    public  getCategory(): CategoryDto {
        return this.category;
    }

}