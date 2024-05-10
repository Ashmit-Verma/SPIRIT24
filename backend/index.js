import express from "express";
import http from "http";
import dotenv from "dotenv";
import mysql from "mysql2";
import profileRoute from "./routers/profileRoute.js";

dotenv.config();

// connecting to database
var con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

con.connect(function (err) {
  if (err) {
    console.log("Error Occured");
    throw err;
  }
  console.log("Connection Done!");
  var sql = "create table testTable(cid int primary key);";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table Created");
  });
});

//running server
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use("/", profileRoute);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
