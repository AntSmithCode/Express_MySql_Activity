const mysql = require("mysql");


const connectionDb = mysql.createPool({  //allows queries
    connectionLimit: 10,
    password: "",
    user: "",
    database: "Pokemon_Data",
    host: localhost,
    port: "3306"
});

let pokeDb = {};

pokeDb.all = () => {
    return new Promise((resolve, reject) => {

        connectionDb.query(`SELECT * FROM Pokemon_Card`, (err, results) => {

            if (err) {
                return reject(err); // Error Handling
            }
                return resolve(results); // Results from DB
        });

    });

};

module.exports = pokeDb;
