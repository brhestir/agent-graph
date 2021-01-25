INSERT INTO department_table (name)
VALUES
("Human Resources"),
("Research & Development"),
("Accounting"),
("Overt Operations"),
("Covert Operations");

INSERT INTO role_table (title, salary, department_id)
VALUES
("HR Director", "950000", 1),
("Senior HR", "350000", 1),
("Junior HR", "80000", 1),	
("Principal Investigator", "350000", 2),
("Software Engineer", "125000", 2),
("Development Intern", "60000", 2),
("Comptroller", "350000", 3),
("Senior Accountant", "125000", 3),
("Junior Accountant", "80000", 3),
("CEO", "11500000", 4),
("Managing Director", "950000", 4),
("Junior Associate", "80000", 4),
("Clandestine Commander", "2000000", 5),
("J.G. Problem Solver", "350000", 5),
("Chief Operative", "200000", 5);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES 
("Chad",        "Barrett",  3,  1),
("Andres",      "Doyle",    2,  1),
("Ella",        "Weaver",   1,  1),
("Ernestine",   "Barton",   2,  1),
("Ellen",       "Ramsey",   3,  1),
("Nina",        "Garza",    3,  1),
("Caleb",       "Frank",    5,  2),
("Rebecca",     "Newton",   4,  2),
("Johnny",      "Wilkerson",6,  2),
("Douglas",     "Walker",   5,  2),
("Gregg",       "Fuller",   5,  2),
("Loretta",     "Jennings", 5,  2),
("Anne",        "Bell",     6,  2),
("Antoinette",  "Abbott",   7,  3),
("Devin",       "Thomas",   8,  3),
("Jay",         "Foster",   9,  3),
("Saul",        "Adams",    9,  3),
("Larry",       "Gomez",    11, 4),
("Theresa",     "Estrada",  10, 4),
("Marsha",      "Ford",     12, 4),
("Samantha",    "Mathis",   12, 4),
("Wilbur",      "Kelley",   14, 5),
("Crystal",     "Roberson", 13, 5),
("Kerry",       "Moran",    15, 5),
("Spencer",     "Sanchez",  15, 5);