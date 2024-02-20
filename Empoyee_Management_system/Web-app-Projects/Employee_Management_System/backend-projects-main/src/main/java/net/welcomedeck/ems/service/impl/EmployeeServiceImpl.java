package net.welcomedeck.ems.service.impl;

import lombok.AllArgsConstructor;
import net.welcomedeck.ems.dto.EmployeeDto;
import net.welcomedeck.ems.entity.Employee;
import net.welcomedeck.ems.exception.ResourceNotFoundException;
import net.welcomedeck.ems.mapper.EmployeeMapper;
import net.welcomedeck.ems.repository.EmployeeRepository;
import net.welcomedeck.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);

    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
       Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not exist with given Id"+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () ->new ResourceNotFoundException("Employee is not exists with given id:"+ employeeId)
        );

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setHometown(updatedEmployee.getHometown());
        employee.setEducation(updatedEmployee.getEducation());
        employee.setExperience(updatedEmployee.getExperience());
        employee.setHobby(updatedEmployee.getHobby());
        employee.setContactNumber(updatedEmployee.getContactNumber());
        employee.setAltProfession(updatedEmployee.getAltProfession());
        employee.setQuote(updatedEmployee.getQuote());
        employee.setCoreSkills(updatedEmployee.getCoreSkills());
        employee.setIbuName(updatedEmployee.getIbuName());
        employee.setManagerName(updatedEmployee.getManagerName());

        Employee updatedEmployeeObj = employeeRepository.save(employee);


        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () ->new ResourceNotFoundException("Employee is not exists with given id:"+ employeeId)
        );

        employeeRepository.deleteById(employeeId);

    }
}
