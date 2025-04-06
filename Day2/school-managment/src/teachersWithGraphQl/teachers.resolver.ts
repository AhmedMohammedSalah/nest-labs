
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeachersService } from './teachers.service';
import { Teacher } from './teacher.model';
import { CreateTeacherDto } from './create-teacher.dto';
import { UpdateTeacherDto } from './update-teacher.dto';

@Resolver(() => Teacher)
export class TeachersResolver {
  constructor(private readonly teachersService: TeachersService) {}

  @Query(() => [Teacher], { name: 'teachers' })
  findAll() {
    return this.teachersService.findAll();
  }

  @Query(() => Teacher, { name: 'teacher' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.teachersService.findOne(id);
  }

  @Mutation(() => Teacher)
  createTeacher(@Args('createTeacherDto') createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Mutation(() => Teacher)
  updateTeacher(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTeacherDto') updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teachersService.update(id, updateTeacherDto);
  }

  @Mutation(() => String)
  removeTeacher(@Args('id', { type: () => Int }) id: number) {
    return this.teachersService.remove(id).message;
  }
}