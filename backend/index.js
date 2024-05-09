import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
