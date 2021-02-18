import express from "express";
import bodyParser from "body-parser";
import sql from "mssql";
import cors from "cors";
import apiRouter from "./routes";

const app = Express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api/2v/allPokemon", apiRouter);

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
