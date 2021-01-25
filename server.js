// server.js

// includes
const inquirer = require(`inquirer`);
const mysql = require(`mysql`);
const agentGraphAASCI = require(`./assets/aasci`);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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

let globalEmployeeId = -1;
let globalRoleId = -1;

function main() {
    agentGraphAASCI();

    inquirer.prompt({
        name: `funcChoice`,
        type: `list`,
        message: `What would you like to do?`,
        choices: [
            `View Departments`,
            `View Roles`,
            `View Employees`,
            `Modify Employee Role`,
            `Create Department`,
            `Create Role`,
            `Create Employee`,
            
            `EXIT`
        ]
    })
    .then( (answer) => {
        switch (answer.funcChoice) {
            case `View Departments`:
                view(`departments`, `*`);
            break;

            case `View Roles`:
                view(`roles`, `*`);
            break;

            case `View Employees`:
                view(`employees`, `*`);
            break;

            case `Modify Employee Role`:
                view(`employees`, `foo`);
            break;
            
            case `Create Department`:
                create(`department`);
            break;

            case `Create Role`:
                create(`role`);
            break;

            case `Create Employee`:
                create(`employee`);
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
                pauseForKeypress();
                //main();     // this is undesired, consider returning from then-chain and loop
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
                pauseForKeypress();
                //main();     // this is undesired, consider returning from then-chain and loop
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
                pauseForKeypress();
                //main();     // this is undesired, consider returning from then-chain and loop
            });
        break;
    }
    
};

function view(nounArg, idArg) {
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
            pauseForKeypress();
            //main();
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
            pauseForKeypress();
            //main();
        break;

        case "employees":
            if(idArg === `*`){
                var query = `SELECT et.id AS "Employee ID", et.first_name AS "First Name", et.last_name AS "Last Name", et.role_id AS "Role ID Ref.",rt.title AS "Title", et.manager_id AS "Manager ID"
                FROM employee_table AS et
                INNER JOIN role_table AS rt
                ON rt.id=et.role_id;`;
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
                pauseForKeypress();
                //main();
            }
            else {
                var query = `SELECT et.id AS "Employee ID", et.first_name AS "First Name", et.last_name AS "Last Name", rt.title AS "Title", et.role_id AS "Role ID Ref."
                FROM role_table AS rt
                INNER JOIN department_table AS dt
                ON dt.id=rt.department_id
                INNER JOIN employee_table AS et
                ON et.role_id=rt.id
                ORDER BY dt.id ASC, rt.id ASC;`;
                connection.query(
                    query,
                    function(err1, res1) {
                        if(err1) {
                            console.log(`\n`);
                            console.log(`${err}`);
                            throw err1;
                        } else {
                            console.log(`\n`);
                            console.table(res1);
                            inquirer.prompt([
                                {
                                    name: `tgtEmpID`,
                                    message: `Enter [Employee ID] of employee whose [Role ID Ref] you wish to modify: `,
                                    type: `input`
                                }
                            ]).then((answ) => {
                                console.log(`${answ.tgtEmpID}`);
                                globalEmployeeId = answ.tgtEmpID;
                                query = `SELECT et.id AS "Employee ID", et.first_name AS "First Name", et.last_name AS "Last Name", rt.title AS "Title", et.role_id AS "Role ID Ref."
                                FROM role_table AS rt
                                INNER JOIN department_table as dt
                                on dt.id=rt.department_id
                                INNER JOIN employee_table as et
                                ON et.role_id=rt.id
                                WHERE et.id = ?;`;
                                connection.query(query, globalEmployeeId, function(err2, res2) {
                                    if(err2) {
                                        console.log(`${err2}`);
                                        throw err;
                                    } else {
                                        console.table(res2);
                                        query = `SELECT rt.id AS "Role ID", rt.title AS "Role Title", dt.name AS "Role Dept."
                                        FROM role_table as rt
                                        INNER JOIN department_table as dt
                                        ON rt.department_id=dt.id;`;
                                        connection.query(query, function(err3, res3) {
                                            if(err3) {
                                                throw err3;
                                            } else {
                                                console.table(res3);
                                                inquirer.prompt([
                                                    {
                                                        name: `tgtRoleID`,
                                                        message: `Enter NEW ROLE ID: `,
                                                        type: `input`
                                                    }
                                                ]).then( (finalAnswer) => {
                                                    console.log(`${finalAnswer.tgtRoleID} : ${globalEmployeeId}`);
                                                    query = `UPDATE employee_table
                                                    SET employee_table.role_id = ?
                                                    WHERE employee_table.id = ?;`;
                                                    connection.query(query, [finalAnswer.tgtRoleID, globalEmployeeId], function(err4, res4) {
                                                        if (err4) {
                                                            throw err4;
                                                        } else {
                                                            console.log(res4);
                                                            pauseForKeypress();
                                                        }
                                                    });
                                                });
                                            }
                                        });
                                    }
                                });
                                
                            });
                            
                            // readline.question(`Enter [Employee ID] of Employee with [Role ID Ref.] to UPDATE: `, tgt_employee_id => {
                            //     console.log(`You entered ${tgt_employee_ref}`);
                            //     if((tgt_employee_ref <= res.length) && (tgt_employee_ref > 0)) {
                            //         console.log(`OK`);
                            //     } else {
                            //         throw inputOutOfBoundsError;
                            //         console.log(`INPUT OUT OF BOUNDS!`);
                            //     }
                            //     readline.question(`Press [ANY KEY] to continue...`, anykey => {
                            //         readline.close();
                            //     });
                            //     readline.close();
                            // });
                        }
                    }
                );
            }
        break;
    }
    
};

function pauseForKeypress() {
    inquirer.prompt([
        {
            name: `anykey`,
            message: `press any key to continue...`,
            type: `input`
        }
    ]).then((anykey) => { main(); });
}

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