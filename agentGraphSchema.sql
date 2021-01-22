DROP DATABASE IF EXISTS agentGraph_db;

CREATE DATABASE agentGraph_db;

USE agentGraph_db;

CREATE TABLE department_table (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,       -- to hold deparment name
    PRIMARY KEY(id)
);

CREATE TABLE role_table (
	id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,      -- to hold role title
    salary DECIMAL(16, 2) NOT NULL,  -- to hold role salary
    department_id INTEGER NOT NULL,   -- to hold reference to department role belongs to
    PRIMARY KEY(id)
);

CREATE TABLE employee_table (
	id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,     -- to hold employee first name
    last_name VARCHAR(30) NOT NULL,		-- to hold employee last name
    role_id INTEGER NOT NULL,			-- to hold reference to role employee has
    manager_id INTEGER NOT NULL,	        -- to hold reference to another employee that manages the employee being created.  This field may be null if the employee has no manager. 
    PRIMARY KEY(id)
);