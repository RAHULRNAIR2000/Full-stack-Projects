package net.welcomedeck.ems.mapper;

import net.welcomedeck.ems.dto.EmployeeDto;
import net.welcomedeck.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getHometown(),
                employee.getEducation(),
                employee.getExperience(),
                employee.getHobby(),
                employee.getContactNumber(),
                employee.getAltProfession(),
                employee.getQuote(),
                employee.getCoreSkills(),
                employee.getIbuName(),
                employee.getManagerName()
        );

    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail(),
                employeeDto.getHometown(),
                employeeDto.getEducation(),
                employeeDto.getExperience(),
                employeeDto.getHobby(),
                employeeDto.getContactNumber(),
                employeeDto.getAltProfession(),
                employeeDto.getQuote(),
                employeeDto.getCoreSkills(),
                employeeDto.getIbuName(),
                employeeDto.getManagerName()
        );
    }
}
