const mysql = require("mysql");

const connectionDb = mysql.createPool({
  //allows queries
  connectionLimit: 20,
  password: "secret",
  user: "",
  database: "Pokemon_Data",
  host: "",
  port: "",
});

let pokeDb = {};

pokeDb.all = () => {
  return new Promise((resolve, reject) => {
    connectionDb.query(`SELECT * FROM pokemon_card`, (err, results) => {
      if (err) {
        return reject(err); // Error Handling
      }
      return resolve(results); // Results from DB
    });
  });
};

module.exports = pokeDb;
