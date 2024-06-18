// dependencies
import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise'; // Use mysql2 with promises for async/await
import fs from 'fs';
// AdminJS
import { adminJs, router as adminRouter } from './admin.js';

// routes
import profileRoute from './routes/profileRoute.js';
import signRoute from './routes/signUpRoute.js';
import userRoutes from './routes/userRoutes.js';
import loginRoute from './routes/loginRoute.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
const corsOptions = {
  origin: 'https://667172b708f31714be02706e--timely-mochi-34f86a.netlify.app',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use('/api', userRoutes); // user routes
app.use('/signup', signRoute); // signIn route
app.use('/login', loginRoute); // login routes
app.use(adminJs.options.rootPath, adminRouter);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// MySQL connection setup
let connection;
async function connectToDatabase() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      connectTimeout: 60000, // 60 seconds
    });
    console.log('Database Connected!');
  } catch (err) {
    console.error('Error connecting to MySQL:', err.stack);
    process.exit(1); // Exit the process with failure
  }
}

// Running server
server.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`AdminJS running on http://localhost:${process.env.PORT}`);
  await connectToDatabase();
});


