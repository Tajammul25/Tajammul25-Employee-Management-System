package com.Employee.Project.Exception;

import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Exception extends RuntimeException {

	private static final long serialVersionUID = -7707302642611948304L;
	
	public Exception(String message) {
		super(message);
	}
	
	  
	
}
