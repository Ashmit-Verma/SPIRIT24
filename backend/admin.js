import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import sequelize from './config/database.js';
import User from './models/User.js';
import dotenv from 'dotenv';
import argon2 from 'argon2'; // Import argon2 library

dotenv.config();

// Initialize AdminJS with the Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

const adminOptions = {
  databases: [sequelize],
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          encryptedPassword: {
            type: 'string',
            isVisible: {
              list: false, edit: true, filter: false, show: true,
            },
          },
          points: {
            type: 'number',
            isVisible: { list: true, filter: true, show: true, edit: true },
          },
        },
        actions: {
          new: {
            isVisible: true,
            before: async (request) => {
              console.log('Creating new user:', request.payload);
              if (request.payload.password) {
                const hashedPassword = await argon2.hash(request.payload.password); // Hash password using argon2
                request.payload.encryptedPassword = hashedPassword;
                request.payload.password = undefined;
              }
              console.log('Processed new user:', request.payload);
              return request;
            },
          },
          edit: {
            before: async (request) => {
              console.log('Editing user:', request.payload);
              if (request.payload.password) {
                const hashedPassword = await argon2.hash(request.payload.password); // Hash password using argon2
                request.payload.encryptedPassword = hashedPassword;
                // request.payload.password = undefined;
              }
              console.log('Processed edit user:', request.payload);
              return request;
            },
          },
        },
      },
    },
  ],
};

const adminJs = new AdminJS(adminOptions);

const sessionOptions = {
  resave: false, // Don't save session if unmodified
  saveUninitialized: false, // Don't create session until something stored
  secret: process.env.COOKIE_SECRET,
  cookie: { secure: process.env.NODE_ENV === 'production' },
};

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      console.log('Correct');
      return { email: process.env.ADMIN_EMAIL };
    }
    return null;
  },
  cookiePassword: process.env.COOKIE_SECRET,
}, null, sessionOptions);

export { adminJs, router };
