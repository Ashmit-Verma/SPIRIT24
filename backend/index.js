import express from "express";
import http from "http";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

// connecting to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "&vttuTw5",
  database: "week01",
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

const app = express();
const server = http.createServer(app);

app.use(express.json());

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
