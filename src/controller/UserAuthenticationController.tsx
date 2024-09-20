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
    serviceStatuses.isUserAuthenticationServiceUp = await this.checkUserAuthenticationService();
    serviceStatuses.isOrderServiceUp = false;
    serviceStatuses.isPaymentServiceUp = false;
    serviceStatuses.isProductServiceUp = false;
    return serviceStatuses;
  }

  private async checkUserAuthenticationService(): Promise<boolean> {
    const isAlive = await this.userAuth.userAuthenticationHealthCheck().then((result: boolean)=> {
        return result;
    })
    return isAlive;
  }
}

export default UserAuthenticationController;
