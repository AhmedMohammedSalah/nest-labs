import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';
@Injectable()
export class EmployeesService {
  private employees: Employee[] = [
    { id: 1, name: ' Ahmed ', salary: 50000, department: 'IT' },
    { id: 2, name: 'Mona', salary: 60000, department: 'HR' },
    { id: 3, name: 'Mike', salary: 55000, department: 'Finance' },
  ];
  private lastId = 3;

  getAllEmployees(): Employee[] {
    return this.employees;
  }
  getEmployeeById(id: number): Employee {
    const employee = this.employees.find((emp) => emp.id === id);
    
    return employee || { id: -1, name: 'Unknown', salary: 0, department: 'Unknown' };
  }

  addEmployee(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee = {
      id: ++this.lastId,
      ...employee,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  updateEmployee(id: number, updateData: Partial<Employee>): Employee {
    const employee = this.getEmployeeById(id);

    Object.assign(employee, updateData);
    return employee;
  }

  deleteEmployee(id: number): boolean {
    const initialLength = this.employees.length;
    this.employees = this.employees.filter((emp) => emp.id !== id);
    return this.employees.length < initialLength;
  }

  getHighestPaidEmployee(): Employee {
    if (this.employees.length === 0)  throw new Error(`no empolyees`);;
    return this.employees.reduce((highest, current) =>
      current.salary > highest.salary ? current : highest,
    );
  }
}
