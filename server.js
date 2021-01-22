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
            `F1`,
            `F2`,
            `F3`,
            `F4`,
            `F5`,
            `EXIT`
        ]
    })
    .then( (answer) => {
        switch (answer.funcChoice) {
            case `F1`:
                F1();
            break;

            case `F2`:
                F2();
            break;

            case `F3`:
                F3();
            break;

            case `F4`:
                F4();
            break;

            case `F5`:
                F5();
            break;

            case `EXIT`:
                console.log(`[i] closing db connection`);
                connection.end();
                console.log(`[i] exiting...`);
            break;
        };
    });
};

function F1() {
    console.log(`F1()`);
    main();
};
function F2() {
    console.log(`F2()`);
    main();
};
function F3() {
    console.log(`F3()`);
    main();
};
function F4() {
    console.log(`F4()`);
    main();
};
function F5() {
    console.log(`F5()`);
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