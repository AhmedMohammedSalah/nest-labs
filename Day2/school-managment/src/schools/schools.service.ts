import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolsService {
 private schools=[
{
  id:1,
  name:'School1',
  address:'Address1',
  numberOfStudent:1000,
  numberOfTeacher:100

},
{
  id:2,
  name:'School2',
  address:'Address2',
  numberOfStudent:2000,
  numberOfTeacher:200

}
 ];
  create(createSchoolDto: CreateSchoolDto) {
    createSchoolDto.id=this.schools.length+1;
    this.schools.push(createSchoolDto);
    return createSchoolDto;
  }

  findAll() {
    return  this.schools;
  }

  findOne(id: number) {
    return this.schools.find(school=>school.id===id);
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
   
    const school = this.schools.find(school => school.id === id);
    if (!school) {
      return { message: `Teacher with ID ${id} not found` };
    }
  
    Object.assign(school, updateSchoolDto);
    return school;
  }

  remove(id: number) {
    this.schools = this.schools.filter((school) => school.id !== id);
    return { message: `School with ID ${id} removed` };
  }


  getSchoolAnalytics() {
    
    var maxTeachersSchooll: any ;
    var minTeachersSchooll: any;
  
    this.schools.forEach(school => {
    
      if (maxTeachersSchooll === null || school.numberOfTeacher > maxTeachersSchooll.numberOfTeacher) {
        maxTeachersSchooll = school;
      }
  
     
      if (minTeachersSchooll === null || school.numberOfTeacher < minTeachersSchooll.numberOfTeacher) {
        minTeachersSchooll = school;
      }
    });
  
    return {
      schoolWithMostTeachers: maxTeachersSchooll,
      schoolWithLeastTeachers: minTeachersSchooll,
    };
  }

}
