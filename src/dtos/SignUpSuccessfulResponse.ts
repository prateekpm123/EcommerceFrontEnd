import ResponseStatuses from "@/models/ResponseStatuses";
import { UserCreatedDto } from "./UserCreatedDto";

interface SignUpSuccessfulResponse {
    data: UserCreatedDto;
    message: string;
    status: ResponseStatuses
}

export default SignUpSuccessfulResponse;