import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    salt: string;

    @Prop({
        required: [true, 'Please provide a role'],
        default: 'unauthorized', 
        enum: ['unauthorized', 'authorized']
    })
    registration_status: string;

    @Prop({required: true, default: Date.now})
    createdAt: Date;

    @Prop({required: true, default: Date.now})
    updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);