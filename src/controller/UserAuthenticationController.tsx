import UserAuthenticationService from "@/service/UserAuthenticationService";

class UserAuthenticationController {
  userAuth: UserAuthenticationService;
  constructor() {
    this.userAuth = UserAuthenticationService.getInstance();
  }

  getUserAuth(): UserAuthenticationService {
    return this.userAuth;
  }
}

export default UserAuthenticationController;
