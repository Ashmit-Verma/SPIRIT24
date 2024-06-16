import dotenv from "dotenv";
dotenv.config();

export const development = {
  username: process.env.user,
  password: process.env.password,
  database: process.env.database,
  host: "mysql",
  dialect: "mysql",
};


