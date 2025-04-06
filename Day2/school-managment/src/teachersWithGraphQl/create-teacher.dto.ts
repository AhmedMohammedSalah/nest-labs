
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateTeacherDto {
  @IsNumber()
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsString()
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @MinLength(5)
  @Field()
  subject: string;
}