import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSchoolDto {
 
      @IsNumber()
      @IsOptional()
      id:number;
      @IsString()
      name:string;
      @IsString()
      address:string;
      @IsNumber()
      numberOfStudent:number;
      @IsNumber()
      numberOfTeacher:number;
}
