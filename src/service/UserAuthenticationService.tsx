import SignUpDto from "@/dtos/SignUpDto";
import axios from "axios";

class UserAuthenticationService {

  private static instance: UserAuthenticationService;

  private constructor() {}

  public static getInstance(): UserAuthenticationService {
    if(!UserAuthenticationService.instance) {
      this.instance = new UserAuthenticationService();
    }
    return this.instance;
    
  }

  static baseUrl: string = "http://localhost:8080/auth/signIn";

  
  async signIn(signupBody: SignUpDto): Promise<object> {
    const response = await axios.post(
      "http://localhost:8080/auth/signIn",
      signupBody,
      {
        headers: {
          "Content-Type": "application/json", // Ensure request is JSON
        },
      }
    );
    return response;
  }
}

export default UserAuthenticationService;
