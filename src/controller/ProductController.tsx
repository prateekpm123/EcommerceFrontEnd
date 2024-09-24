import { ProductDto } from "@/dtos/ProductDto";
import ProductService from "@/service/ProductService";

class ProductController {
  productService: ProductService;
  constructor() {
    this.productService = ProductService.getInstance();
  }

  getUserAuth(): ProductService {
    return this.productService;
  }

  fetchAllProducts(): Promise<Array<ProductDto>> {
    return this.productService.fetchAllProducts();
  }

  // private async checkProductService(): Promise<boolean> {
  //   const isAlive = await this.userAuth.ProductHealthCheck().then((result: boolean)=> {
  //       return result;
  //   })
  //   return isAlive;
  // }
}

export default ProductController;
