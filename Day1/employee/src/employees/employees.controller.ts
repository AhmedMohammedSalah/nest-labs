import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.model';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAllEmployees(): Employee[] {
    return this.employeesService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: string): Employee {
    const employee = this.employeesService.getEmployeeById(+id);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  @Post()
  addEmployee(@Body() employee: Omit<Employee, 'id'>): Employee {
    return this.employeesService.addEmployee(employee);
  }

  @Put(':id')
  updateEmployee(
    @Param('id') id: string,
    @Body() updateData: Partial<Employee>,
  ): Employee {
    const employee = this.employeesService.updateEmployee(+id, updateData);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: string): { success: boolean } {
    const success = this.employeesService.deleteEmployee(+id);
    if (!success) {
      throw new NotFoundException('Employee not found');
    }
    return { success };
  }

  @Get('highest-paid')
  getHighestPaidEmployee(): Employee {
    const employee = this.employeesService.getHighestPaidEmployee();
    if (!employee) {
      throw new NotFoundException('No employees found');
    }
    return employee;
  }
}
