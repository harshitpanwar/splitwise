import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true, select: false})
    password: string;

    @Prop({required: true, select: false})
    salt: string;

    @Prop({
        required: [true, 'Please provide a role'],
        default: 'unauthorized', 
        enum: ['unauthorized', 'authorized']
    })
    registration_status: string;

    @Prop({
        balance: {type: Number, default: 0},
    })

    @Prop({required: true, default: Date.now})
    createdAt: Date;

    @Prop({required: true, default: Date.now})
    updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);