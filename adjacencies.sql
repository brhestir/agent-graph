-- DROP DATABASE IF EXISTS agentGraph_db;

-- CREATE DATABASE agentGraph_db;

-- USE agentGraph_db;

-- CREATE TABLE department_table (
-- 	id INTEGER NOT NULL AUTO_INCREMENT,
--     name VARCHAR(30) NOT NULL,       -- to hold deparment name
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE role_table (
-- 	id INTEGER NOT NULL AUTO_INCREMENT,
--     title VARCHAR(30) NOT NULL,      -- to hold role title
--     salary DECIMAL(16, 2) NOT NULL,  -- to hold role salary
--     department_id INTEGER NOT NULL,   -- to hold reference to department role belongs to
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE employee_table (
-- 	id INTEGER NOT NULL AUTO_INCREMENT,
--     first_name VARCHAR(30) NOT NULL,     -- to hold employee first name
--     last_name VARCHAR(30) NOT NULL,		-- to hold employee last name
--     role_id INTEGER NOT NULL,			-- to hold reference to role employee has
--     manager_id INTEGER NOT NULL,	        -- to hold reference to another employee that manages the employee being created.  This field may be null if the employee has no manager. 
--     PRIMARY KEY(id)
-- );

-- INSERT INTO department_table (name)
-- VALUES
-- ("Human Resources"),
-- ("Research & Development"),
-- ("Accounting"),
-- ("Overt Operations"),
-- ("Covert Operations"),
-- ("Public Relations"),
-- ("Risk Management");

-- INSERT INTO role_table (title, salary, department_id)
-- VALUES
-- ("Senior HR", "100000", 1),
-- ("Junior HR", "65000", 1),
-- ("Principal Investigator", "150000", 2),
-- ("Software Engineer", "100000", 2),
-- ("Development Intern", "35000", 2),
-- ("Comptroller", "350000", 3),
-- ("Senior Accountant", "95000", 3),
-- ("Junior Accountant", "50000", 3),
-- ("CEO", "150000000", 4),
-- ("Managing Director", "850000", 4),
-- ("Junior Associate", "65000", 4),
-- ("Clandestine Commander", "250000", 5),
-- ("Tricky Problem Solver", "125000", 5),
-- ("Slick Operative", "40000", 5);

-- INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
-- VALUES 
-- ("Chad",        "Barrett",  1, 1),
-- ("Andres",      "Doyle",    1, 1),
-- ("Ella",        "Weaver",   1, 1),
-- ("Ernestine",   "Barton",   1, 1),
-- ("Ellen",       "Ramsey",   2, 1),
-- ("Nina",        "Garza",    3, 1),
-- ("Caleb",       "Frank",    4, 2),
-- ("Rebecca",     "Newton",   5, 2),
-- ("Johnny",      "Wilkerson",1, 2),
-- ("Douglas",     "Walker",   2, 2),
-- ("Gregg",       "Fuller",   3, 2),
-- ("Loretta",     "Jennings", 4, 2),
-- ("Anne",        "Bell",     5, 2),
-- ("Antoinette",  "Abbott",   1, 3),
-- ("Devin",       "Thomas",   1, 3),
-- ("Jay",         "Foster",   1, 3),
-- ("Saul",        "Adams",    1, 3),
-- ("Larry",       "Gomez",    2, 4),
-- ("Theresa",     "Estrada",  3, 4),
-- ("Marsha",      "Ford",     4, 4),
-- ("Samantha",    "Mathis",   5, 4),
-- ("Wilbur",      "Kelley",   1, 5),
-- ("Crystal",     "Roberson", 2, 5),
-- ("Kerry",       "Moran",    3, 5),
-- ("Spencer",     "Sanchez",  4, 5);

SELECT * FROM department_table;
SELECT * FROM employee_table;
SELECT * FROM role_table;

-- List employees by department
SELECT employee_table.first_name AS "Employee First Name", employee_table.last_name AS "Employee Last Name", department_table.name AS "Department"
FROM employee_table
INNER JOIN department_table ON department_table.id=employee_table.role_id
ORDER BY department_table.name ASC;

-- List employees by manager
SELECT e.first_name as "Employee First Name", e.last_name as "Employee Last Name", m.first_name as "Manager First Name", m.last_name as "Manager Last Name"
FROM 	employee_table e,
		employee_table m
WHERE m.role_id = e.manager_id;