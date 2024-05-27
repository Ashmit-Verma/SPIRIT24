import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import expressSession from "express-session";
import * as AdminJSSequelize from "@adminjs/sequelize";
import adminResource from "./resources/adminResource.js";
import userResource from "./resources/userResource.js";
import authenticateAdmin from "./authenticateAdmin.js";
import dotenv from "dotenv";
import { buildRouter } from "@adminjs/express";
import Admin from "../models/Admin.js";

// const adminRouter = express.Router();

dotenv.config();

AdminJS.registerAdapter(AdminJSSequelize);

console.log(process.env.ADMIN_PANEL_ROOT_PATH);

const adminJs = new AdminJS({
  resources: [userResource, adminResource],
  rootPath: process.env.ADMIN_PANEL_ROOT_PATH,
  loginPath: process.env.ADMIN_PANEL_ROOT_PATH + "/login",
  logoutPath: process.env.ADMIN_PANEL_ROOT_PATH + "/logout",
  authenticateAdmin,
});

import express from "express";
import session from "express-session";
import MySQLStoreFactory from "express-mysql-session";

// const app = express();
const MySQLStore = MySQLStoreFactory(session);

const insertDemoAdmin = async () => {
  // await sequelize.sync(); // Sync models with the database

  // Check if the admin exists
  const admin = await Admin.findOne({ where: { email: "admin@example.com" } });
  if (!admin) {
    // Insert demo admin if not found
    await Admin.create({
      email: "admin@example.com",
      password: "adminpassword", // Store hashed password in production
    });
    console.log("Demo admin inserted.");
  } else {
    console.log("Demo admin already exists.");
  }
};

insertDemoAdmin().catch((error) => {
  console.error("Error inserting demo admin:", error);
});

const options = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "&vttuTw5",
  database: "adminjs",
  schema: {
    tableName: "user_sessions",
    columnNames: {
      session_id: "session_id_column_name",
      expires: "expires_column_name",
      data: "data_column_name",
    },
  },
};

const sessionStore = new MySQLStore(options);

sessionStore
  .onReady()
  .then(() => {
    // MySQL session store ready for use.
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    // Something went wrong.
    console.error(error);
  });

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    cookieName: "adminjs",
    cookiePassword: process.env.ADMIN_PANEL_COOKIE_SECRET,
    authenticate: authenticateAdmin,
  },
  null,
  {
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    },
    resave: false,
    saveUninitialized: true,
  }
);

// console.log(adminRouter);
const adminRouterInstance = adminRouter;
console.log(adminJs.options.rootPath);
adminRouter.use(adminJs.options.rootPath, adminRouterInstance);

export default adminRouter;

// export default adminRouter;
