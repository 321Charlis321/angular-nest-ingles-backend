import { IsString } from "class-validator";

export class CreateFraseDto {

    @IsString()
    ingles: string;

    @IsString()
    spanish: string;

    @IsString()
    opcion1: null;

    @IsString()
    opcion2: string;

    @IsString()
    opcion3: string;
}
