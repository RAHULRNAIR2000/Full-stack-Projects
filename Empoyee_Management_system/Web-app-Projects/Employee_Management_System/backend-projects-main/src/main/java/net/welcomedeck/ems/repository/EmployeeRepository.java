package net.welcomedeck.ems.repository;

import net.welcomedeck.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{
}
