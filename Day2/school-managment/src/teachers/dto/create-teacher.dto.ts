import { IsEmail, IsNumber, IsOptional, IsString, min, MinLength } from "class-validator";

export class CreateTeacherDto {


    @IsNumber()
    @IsOptional()
    id: number
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(5)
    subject: string;
}
