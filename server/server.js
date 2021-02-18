const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const cors = require("cors");
const apiRouter = require("./routes");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api/2v/allPokemon", apiRouter);

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
