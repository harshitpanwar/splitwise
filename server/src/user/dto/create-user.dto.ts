import { IsEmail, IsEnum, IsString } from "class-validator";

export enum RegistrationStatus {
    unauthorized = "unauthorized",
    authorized = "authorized"
}

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
    
    @IsEnum(RegistrationStatus)
    registration_status: string;

}
