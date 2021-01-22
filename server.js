// server.js

// includes
const inquirer = require(`inquirer`);
const mysql = require(`mysql`);
const agentGraphAASCI = require(`./assets/aasci`);

var connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `toor!TOOR!`,
    database: `agentGraph_db`
});

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`connected to ${connection.database} at ${connection.host}:${connection.port}`);
        main();
    }
    
})

function main() {
    agentGraphAASCI();

    inquirer.prompt({
        name: `funcChoice`,
        type: `list`,
        message: `What would you like to do?`,
        choices: [
            `Create Department`,
            `Create Role`,
            `Create Employee`,
            `View Departments`,
            `View Roles`,
            `View Employees`,
            `EXIT`
        ]
    })
    .then( (answer) => {
        switch (answer.funcChoice) {
            case `Create Department`:
                create(`department`);
            break;

            case `Create Role`:
                create(`role`);
            break;

            case `Create Employee`:
                create(`employee`);
            break;

            case `View Departments`:
                view(`departments`);
            break;

            case `View Roles`:
                view(`roles`);
            break;

            case `View Employees`:
                view(`employees`);
            break;

            case `EXIT`:
                console.log(`[i] closing db connection`);
                connection.end();
                console.log(`[i] exiting...`);
            break;
        };
    });
};

function create(nounArg) {
    console.log(`create(${nounArg})`);
    switch (nounArg) {
        case `department`:
            inquirer.prompt([
                {
                    name: `deptName`,
                    type: `input`,
                    message: `Enter department name: `
                },
            ])
            .then( (answers) => {
                console.log(`\n${answers.deptName}\n`);
                var query = `INSERT INTO department_table (name) VALUES ("${answers.deptName}");`;
                connection.query(
                    query,
                    function(err, res) {
                        if(err) {
                            console.log(`\n`);
                            console.log(`${err}`);
                            throw err;
                        } else {
                            console.log(`\n`);
                            console.table(res);
                        }  
                    }
                );
                main();     // this is undesired, consider returning from then-chain and loop
            });
        break;

        case `role`:
            inquirer.prompt([
                {
                    name: `roleTitle`,
                    type: `input`,
                    message: `Enter role title: `
                },
                {
                    name: `roleSalary`,
                    type: `input`,
                    message: `Enter role salary: `
                },
                {
                    name: `roleDepartment_id`,
                    type: `input`,
                    message: `Enter role department_id: `
                },
            ])
            .then( (answers) => {
                console.log(`\n${answers.roleTitle}, ${answers.roleSalary}, ${answers.roleDepartment_id}\n`);
                var query = `INSERT INTO role_table (title, salary, department_id) VALUES ("${answers.roleTitle}", ${answers.roleSalary}, ${answers.roleDepartment_id});`;
                connection.query(
                    query,
                    // {
                    //     roleName: answers.roleName, 
                    //     roleSalary: answers.roleSalary,
                    //     roleDeptId: answers.roleDeptId
                    // },
                    function(err, res) {
                        if(err) {
                            console.log(`\n`);
                            console.log(`${err}`);
                            throw err;
                        } else {
                            console.log(`\n`);
                            console.table(res);
                        }  
                    }
                );
                main();     // this is undesired, consider returning from then-chain and loop
            });
        break;

        case `employee`:
            inquirer.prompt([
                {
                    name: `first_name`,
                    type: `input`,
                    message: `Enter employee first name: `
                },
                {
                    name: `last_name`,
                    type: `input`,
                    message: `Enter employee last name: `
                },
                {
                    name: `role_id`,
                    type: `input`,
                    message: `Enter employee role id: `
                },
                {
                    name: `manager_id`,
                    type: `input`,
                    message: `Enter employee manager id: `
                },
            ])
            .then( (answers) => {
                console.log(`\n${answers.first_name}, ${answers.last_name}, ${answers.role_id}, ${answers.manager_id}\n`);
                var query = `INSERT INTO employee_table (first_name, last_name, role_id, manager_id) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.manager_id});`;
                connection.query(
                    query,
                    // {
                    //     employeeFirstName: answers.employeeFirstName, 
                    //     employeeLastName: answers.employeeLastName,
                    //     employeeRoleId: answers.employeeRoleId,
                    //     employeeManagerId: answers.employeeManagerId
                    // },
                    function(err, res) {
                        if(err) {
                            console.log(`\n`);
                            console.log(`${err}`);
                            throw err;
                        } else {
                            console.log(`\n`);
                            console.table(res);
                        }  
                    }
                );
                main();     // this is undesired, consider returning from then-chain and loop
            });
        break;
    }
    
};

function view(nounArg) {
    console.log(`view(${nounArg})`);
    switch (nounArg) {
        case "departments":
            var query = `SELECT * FROM department_table;`;
            connection.query(
                query,
                function(err, res) {
                    if(err) {
                        console.log(`\n`);
                        console.log(`${err}`);
                        throw err;
                    } else {
                        console.log(`\n`);
                        console.table(res);
                    }
                }
            );
        break;

        case "roles":
            var query = `SELECT * FROM role_table;`;
            connection.query(
                query,
                function(err, res) {
                    if(err) {
                        console.log(`\n`);
                        console.log(`${err}`);
                        throw err;
                    } else {
                        console.log(`\n`);
                        console.table(res);
                    }
                }
            );
        break;

        case "employees":
            var query = `SELECT * FROM employee_table;`;
            connection.query(
                query,
                function(err, res) {
                    if(err) {
                        console.log(`\n`);
                        console.log(`${err}`);
                        throw err;
                    } else {
                        console.log(`\n`);
                        console.table(res);
                    }
                }
            );
        break;
    }
    main();
};




// const verbArray = [
//     {
//         name: `Create`,
//         funcp: fp_Create()
//     },
//     {
//         name: `Read`,
//         funcp: fp_Read()
//     },
//     {
//         name: `Update`,
//         funcp: fp_Update()
//     },
//     {
//         name: `Delete`,
//         funcp: fp_Delete()
//     }
// ];

// const nounArray = [
//     {
//         name: "department",
//         objp: ""
//     },
//     {
//         name: "role",
//         objp: ""
//     },
//     {
//         name: "employee",
//         objp: ""
//     },
// ];