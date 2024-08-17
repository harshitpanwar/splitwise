import { IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {

    @IsNumber()
    amount: number;

    @IsString()
    type: string;

    @IsString()
    sender: string;

    @IsString()
    receiver: string;

    @IsString()
    description: string;
    
    createdAt: Date;

    updatedAt: Date;


}