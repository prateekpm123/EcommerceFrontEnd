import { MicroServicesHealthStatus } from "@/models/MicroServicesHealthStatus";
import ProductService from "@/service/ProductService";
import UserAuthenticationService from "@/service/UserAuthenticationService";

class UserAuthenticationController {
  userAuth: UserAuthenticationService;
  productService: ProductService;
  constructor() {
    this.userAuth = UserAuthenticationService.getInstance();
    this.productService = ProductService.getInstance();
  }

  getUserAuth(): UserAuthenticationService {
    return this.userAuth;
  }

  public async checkUpOnMicroServices(): Promise<MicroServicesHealthStatus> {
    const serviceStatuses: MicroServicesHealthStatus = new MicroServicesHealthStatus();   
    try {
        const result  = await this.checkUserAuthenticationService();
        const isProductUp  = await this.checkProductService();
        console.log("is this working ?");
        serviceStatuses.isUserAuthenticationServiceUp = result;
        serviceStatuses.isOrderServiceUp = false;
        serviceStatuses.isPaymentServiceUp = false;
        serviceStatuses.isProductServiceUp = isProductUp;
        return serviceStatuses;
    } catch(e) {
        console.log(e);
        serviceStatuses.isUserAuthenticationServiceUp = false;
        serviceStatuses.isOrderServiceUp = false;
        serviceStatuses.isPaymentServiceUp = false;
        serviceStatuses.isProductServiceUp = false;
        return serviceStatuses;   
    }
   
  }

  private async checkUserAuthenticationService(): Promise<boolean> {
    const isAlive = await this.userAuth.userAuthenticationHealthCheck().then((result: boolean)=> {
        return result;
    })
    return isAlive;
  }

  private async checkProductService(): Promise<boolean> {
    const isAlive = await this.productService.productServiceHealthCheck().then((result: boolean)=> {
        return result;
    })
    return isAlive;
  }
}

export default UserAuthenticationController;
