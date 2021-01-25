SELECT * FROM department_table;

-- List employee info
SELECT et.id AS "Employee ID", et.first_name AS "First Name", et.last_name AS "Last Name", et.role_id AS "Role ID Ref.",rt.title AS "Title", et.manager_id AS "Manager ID"
FROM employee_table AS et
INNER JOIN role_table AS rt
ON rt.id=et.role_id; 

SELECT * FROM role_table;

-- List employees by manager
SELECT e.first_name as "Employee First Name", e.last_name as "Employee Last Name", m.first_name as "Manager First Name", m.last_name as "Manager Last Name"
FROM 	employee_table e,
		employee_table m
WHERE m.role_id = e.manager_id;

-- List employees by department
SELECT employee_table.first_name AS "Employee First Name", employee_table.last_name AS "Employee Last Name", department_table.name AS "Department", department_table.id as "Department ID"
FROM employee_table
INNER JOIN department_table
ON department_table.id=employee_table.role_id
ORDER BY department_table.id ASC;

-- List employees by ROLE
SELECT employee_table.first_name AS "Employee First Name", employee_table.last_name AS "Employee Last Name", role_table.title AS "Title", role_table.id AS "Role ID", employee_table.role_id AS "Employee Role REF", department_table.name AS "Department", department_table.id as "Department ID"
FROM role_table
INNER JOIN department_table
ON department_table.id=role_table.department_id
INNER JOIN employee_table
ON employee_table.role_id=role_table.id
ORDER BY department_table.id ASC, role_table.id ASC;

-----------------------------------------------------------------------------
-- PROCESS: "Update employee role"
-- 1. List each employee name, role_name and role_id; PROMPT: "Enter [Employee ID] (of employee whose [Role ID Ref] you wish to modify): -> store in selected_employee_id
SELECT et.id AS "Employee ID", et.first_name AS "First Name", et.last_name AS "Last Name", rt.title AS "Title", et.role_id AS "Role ID Ref."
FROM role_table AS rt
INNER JOIN department_table AS dt
ON dt.id=rt.department_id
INNER JOIN employee_table AS et
ON et.role_id=rt.id
ORDER BY dt.id ASC, rt.id ASC;

-- 2. Display Selected Employee data of selected employee ID: Display "Selected Employee Details:" followed by below prompt...
SELECT et.id AS "Employee ID", et.first_name AS "First Name", et.last_name AS "Last Name", rt.title AS "Title", et.role_id AS "Role ID Ref."
FROM role_table AS rt
INNER JOIN department_table as dt
on dt.id=rt.department_id
INNER JOIN employee_table as et
ON et.role_id=rt.id
WHERE et.id = 1;

-- 3. Display List of possible other roles:  PROMPT: "Enter new [Role ID]: " -> store in tgt_role_id_ref
SELECT rt.id AS "Role ID", rt.title AS "Role Title", dt.name AS "Role Dept."
FROM role_table as rt
INNER JOIN department_table as dt
ON rt.department_id=dt.id;

-- 4. UPDATE [role id ref] of [selected employee id] to [target role id ref]
UPDATE employee_table
SET employee_table.role_id = 2
WHERE employee_table.id = 1;
-----------------------------------------------------------------------------