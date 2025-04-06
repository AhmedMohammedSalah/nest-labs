import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './create-teacher.dto';
import { UpdateTeacherDto } from './update-teacher.dto';

@Injectable()
export class TeachersService {
  private teachers = [
    { id: 1, name: 'Ahmed Mohamed', email: 'ahmed@example.com', subject: 'Math' },
    { id: 2, name: 'Sara Ali', email: 'sara@example.com', subject: 'Physics' },
  ];

  create(createTeacherDto: CreateTeacherDto) {
    const newTeacher = { ...createTeacherDto, id: this.teachers.length + 1 };
    this.teachers.push(newTeacher);
    return newTeacher;         
  }

  findAll() {
    return this.teachers;
  }

  findOne(id: number) {
    return this.teachers.find((teacher) => teacher.id === id);
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (!teacher) {
      return { message: `Teacher with ID ${id} not found` };
    }
    Object.assign(teacher, updateTeacherDto);
    return teacher;
  }

  remove(id: number) {
    this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
    return { message: `Teacher with ID ${id} removed` };
  }
}
