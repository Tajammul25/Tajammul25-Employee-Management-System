package com.Employee.Project.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Employee.Project.Entity.Employee;
import com.Employee.Project.Exception.Exception;
import com.Employee.Project.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = "http://localhost:4200/")
public class EmployeeController {
	
	@Autowired
	public  EmployeeRepository employeerepository;
	
	// get All Employee Records
	@GetMapping("/getallemployee")
	public List<Employee> getAllEmployee(){
		
		return employeerepository.findAll();
	}
	
	// Add Employee record
	@PostMapping("/addEmployee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeerepository.save(employee);
	}
	
	// getEmployeeById
	
	@GetMapping("/getEmployeeById/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long id) {
	    Employee employee = employeerepository.findById(id).
	    		orElseThrow(() -> new Exception("Employee not found with id: \" + id"));
	    		   
	    return ResponseEntity.ok(employee);
	}
	
	// Update Employee
	
	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){
		 Employee employee = employeerepository.findById(id)
				 .orElseThrow(() -> new Exception("Employee not found with id: " + id));
		 
		 employee.setFirstName(employeeDetails.getFirstName());
		 employee.setLastName(employeeDetails.getLastName());
		 employee.setEmailId(employeeDetails.getEmailId());
		 
		Employee updatedEmployee= employeerepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	// Detele Employee
	
	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id){
	 Employee employee = employeerepository.findById(id).
			 orElseThrow(() -> new Exception("Employee not found with id: " + id));
	 
	 employeerepository.delete(employee);
	 Map<String, Boolean> responce = new HashMap<String, Boolean>();
	 responce.put("Employee Deleted Successfully", true);
	 return ResponseEntity.ok(responce);
	}
	

}
