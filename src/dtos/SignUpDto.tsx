// import { UserStatus } from "@/models/UserStatus";

class SignUpDto {
    private email: string;
    private password: string;
    // private userStatus: UserStatus;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
        // this.userStatus = userStatus;
    }
}

export default SignUpDto;