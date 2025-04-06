
import { InputType, PartialType } from '@nestjs/graphql';
import { CreateTeacherDto } from './create-teacher.dto';

@InputType()
export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}
