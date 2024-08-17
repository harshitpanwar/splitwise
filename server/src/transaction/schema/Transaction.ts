import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import Mongoose from "mongoose";


@Schema()

export class Transaction extends Document {
    
        @Prop({required: true})
        amount: number;
    
        type: string;

        @Prop({required: true, ref: 'User'})
        sender: Mongoose.Types.ObjectId;

        @Prop({required: true, ref: 'User'})
        receiver: Mongoose.Types.ObjectId;

        description: string;
    
        @Prop({required: true, default: Date.now})
        createdAt: Date;
    
        @Prop({required: true, default: Date.now})
        updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);