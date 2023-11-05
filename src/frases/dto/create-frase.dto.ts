import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";
import { v4 } from 'uuid'

export class CreateFraseDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    no: number

    @IsString()
    @MinLength(1)
    ingles: string;

    @IsString()
    readonly spanish: string;

    @IsString()
    readonly opcion1: string;

    @IsString()
    readonly opcion2: string;

    @IsString()
    readonly opcion3: string;
}
