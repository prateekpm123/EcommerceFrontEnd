import { MicroServicesHealthStatus } from "@/models/MicroServicesHealthStatus";
import UserAuthenticationService from "@/service/UserAuthenticationService";

class UserAuthenticationController {
  userAuth: UserAuthenticationService;
  constructor() {
    this.userAuth = UserAuthenticationService.getInstance();
  }

  getUserAuth(): UserAuthenticationService {
    return this.userAuth;
  }

  public async checkUpOnMicroServices(): Promise<MicroServicesHealthStatus> {
    const serviceStatuses: MicroServicesHealthStatus = new MicroServicesHealthStatus();   
    try {
        const result  = await this.checkUserAuthenticationService();
        console.log("is this working ?");
        serviceStatuses.isUserAuthenticationServiceUp = result;
        serviceStatuses.isOrderServiceUp = false;
        serviceStatuses.isPaymentServiceUp = false;
        serviceStatuses.isProductServiceUp = false;
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
}

export default UserAuthenticationController;
