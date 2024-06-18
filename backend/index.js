import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import session from 'express-session'; // Import express-session
import MySQLStore from 'express-mysql-session'; // Import express-mysql-session for storing sessions in MySQL
import sequelize from './config/database.js';
import { adminJs, router as adminRouter } from './admin.js';
import profileRoute from './routes/profileRoute.js';
import signRoute from './routes/signUpRoute.js';
import userRoutes from './routes/userRoutes.js';
import loginRoute from './routes/loginRoute.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
const corsOptions = {
  origin: 'https://6671a8ba803efa009fdbf460--timely-mochi-34f86a.netlify.app/',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Session middleware configuration
const sessionStore = new MySQLStore({
  /* 
    Configure your MySQL connection details here for session store
    See the documentation of express-mysql-session for more details
  */
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(session({
  secret: process.env.SESSION_SECRET, // Add a secret key for session encryption
  resave: false, // Set to false to avoid session saving on every request
  saveUninitialized: false, // Set to false to prevent saving uninitialized sessions
  store: sessionStore, // Use MySQLStore for session storage
  cookie: {
    secure: true, // Set to true if your app is served over HTTPS
    httpOnly: true,
    maxAge: 3600000, // Session expiration time (in milliseconds), adjust as needed
  },
}));

app.use('/api', userRoutes);
app.use('/signup', signRoute);
app.use('/login', loginRoute);
app.use(adminJs.options.rootPath, adminRouter);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// let connection;
// async function connectToDatabase() {
//   try {
//     connection = await mysql.createConnection({
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//       connectTimeout: 60000,
//     });
//     console.log('Database Connected!');
//   } catch (err) {
//     console.error('Error connecting to MySQL:', err.stack);
//     process.exit(1);
//   }
// }

server.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`AdminJS running on http://localhost:${process.env.PORT}`);
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
});