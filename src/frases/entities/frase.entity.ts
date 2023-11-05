import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Frase extends Document {

    @Prop({ unique: true, required: true, index: true })
    no: number;

    @Prop({ unique: true, require: true, index: true })
    ingles: string;

    @Prop({ required: true })
    spanish: string;

    @Prop()
    opcion1: string;

    @Prop()
    opcion2: string;

    @Prop()
    opcion3: string;

}



export const FraseSchema = SchemaFactory.createForClass(Frase);