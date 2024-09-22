import { UserStatus } from "@/models/UserStatus";

export interface UserCreatedDto {
    email: string;
    id: number;
    password: string;
    status: UserStatus;
}
