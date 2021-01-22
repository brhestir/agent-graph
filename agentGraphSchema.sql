DROP DATABASE IF EXISTS agentGraph_db;

CREATE DATABASE agentGraph_db;

USE agentGraph_db;

CREATE TABLE department (
	id INTEGER,
    name VARCHAR(30),       -- to hold deparment name
    PRIMARY KEY(id)
);

CREATE TABLE role (
	id INTEGER,
    title VARCHAR(30),      -- to hold role title
    salary DECIMAL(16, 2),  -- to hold role salary
    department_id INTEGER,   -- to hold reference to department role belongs to
    PRIMARY KEY(id)
);

CREATE TABLE employee (
	id INTEGER,
    first_name VARCHAR(30),     -- to hold employee first name
    last_name VARCHAR(30),		-- to hold employee last name
    role_id INTEGER,			-- to hold reference to role employee has
    manager_id INTEGER,	        -- to hold reference to another employee that manages the employee being created.  This field may be null if the employee has no manager. 
    PRIMARY KEY(id)
);