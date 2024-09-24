import { ProductDto } from "@/dtos/ProductDto";
import axios from "axios";

class ProductService {

  private static instance: ProductService;

  private constructor() {}

  public static getInstance(): ProductService {
    if(!ProductService.instance) {
      this.instance = new ProductService();
    }
    return this.instance;
    
  }

  static baseUrl: string = "http://localhost:8081";

  public async fetchAllProducts(): Promise<ProductDto[]> {
    try {
      const data = await axios.get(
        ProductService.baseUrl + "/products"
      );
      return data.data as ProductDto[];
    } catch(testing) {
      console.log(testing);
      return Promise.reject(testing);
    }
  }
  


  async ProductHealthCheck(): Promise<boolean> {
    const response = await axios.get(
      ProductService.baseUrl + "/auth/status"
    )
    if(response.status) {
      return true;
    }
    return false;
  }
}

export default ProductService;
