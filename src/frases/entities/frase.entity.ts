import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Frase {

    @Prop({ unique: true, require: true })
    ingles: string;

    @Prop({ required: true })
    spanish: string;

    @Prop()
    opcion1?: string;

    @Prop()
    opcion2?: string;

    @Prop()
    opcion3?: string;

}



export const FraseSchema = SchemaFactory.createForClass(Frase);