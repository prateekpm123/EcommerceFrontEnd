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
  
  async productServiceHealthCheck(): Promise<boolean> {
    try {
      const response = await axios.get(
        ProductService.baseUrl + "/products/status"
      )
      if(response.data) {
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
      return false;
    }
  }
}

export default ProductService;
