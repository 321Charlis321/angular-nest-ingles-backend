import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Frase {
    @Prop({ require: true })
    ingles: string;

    @Prop({ required: true })
    spanish: string;
}



export const FraseSchema = SchemaFactory.createForClass(Frase);