package com.Employee.Project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Employee.Project.Entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	
}
