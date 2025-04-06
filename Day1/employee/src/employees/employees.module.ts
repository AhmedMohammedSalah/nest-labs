import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [],
  controllers: [EmployeesController],
  providers: [ EmployeesService],
  exports: [],
})
export class EmployeesModule {}
