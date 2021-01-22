-- seeds.sql

INSERT INTO department_table (name)
VALUES
("Human Resources"),            -- 1
("Research & Development"),     -- 2
("Accounting"),                 -- 3
("Overt Operations"),           -- 4
("Covert Operations"),          -- 5

INSERT INTO role_table (title, salary, department_id)
VALUES
("Senior HR", "100000", 1),
("Junior HR", "65000", 1),
("Principal Investigator", "150000", 2),
("Software Engineer", "100000", 2),
("Development Intern", "35000", 2),
("Comptroller", "350000", 3),
("Senior Accountant", "95000", 3),
("Junior Accountant", "50000", 3),
("CEO", "150000000", 4),
("Managing Director", "850000", 4),
("Junior Associate", "65000", 4),
("Clandestine Commander", "250000", 5),
("Tricky Problem Solver", "125000", 5),
("Slick Operative", "40000", 5);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES 
("Chad",        "Barrett",  1, 1);
("Andres",      "Doyle",    1, 1),
("Ella",        "Weaver",   1, 1),
("Ernestine",   "Barton",   1, 1),
("Ellen",       "Ramsey",   2, 1),
("Nina",        "Garza",    3, 1),
("Caleb",       "Frank",    4, 2),
("Rebecca",     "Newton",   5, 2),
("Johnny",      "Wilkerson" 1, 2),
("Douglas",     "Walker",   2, 2),
("Gregg",       "Fuller",   3, 2),
("Loretta",     "Jennings", 4, 2),
("Anne",        "Bell",     5, 2),
("Antoinette",  "Abbott",   1, 3),
("Devin",       "Thomas",   1, 3),
("Jay",         "Foster",   1, 3),
("Saul",        "Adams",    1, 3),
("Larry",       "Gomez",    2, 4),
("Theresa",     "Estrada",  3, 4),
("Marsha",      "Ford",     4, 4),
("Samantha",    "Mathis",   5, 4),
("Wilbur",      "Kelley",   1, 5),
("Crystal",     "Roberson", 2, 5),
("Kerry",       "Moran",    3, 5),
("Spencer",     "Sanchez",  4, 5);
