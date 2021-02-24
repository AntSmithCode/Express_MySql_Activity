const mysql = require("mysql");

const connectionDb = mysql.createPool({
  //allows queries
  connectionLimit: 20,
  password: "secret",
  user: "root",
  database: "Pokemon_Data",
  host: "localhost"
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
