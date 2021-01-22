// server.js

// includes
const inquirer = require(`inquirer`);
const mysql = require(`mysql`);

var connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `${process.argv[2]}`,
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
        case "department":
        break;

        case "role":
        break;

        case "employee":
        break;
    }
    main();
};

function view(nounArg) {
    console.log(`view(${nounArg})`);
    switch (nounArg) {
        case "departments":
        break;

        case "roles":
        break;

        case "employees":
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