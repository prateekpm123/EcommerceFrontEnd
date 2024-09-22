// import { UserStatus } from "@/models/UserStatus";

class SignUpDto {
    private email: string;
    private password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export default SignUpDto;