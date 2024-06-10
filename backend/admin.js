import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import sequelize from './config/database.js';
import User from './models/User.js';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
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
            isVisible: { list: false, filter: false, show: false, edit: true },
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
            before: async (request) => {
              console.log('Creating new user:', request.payload);
              if (request.payload.password) {
                const salt = await bcrypt.genSalt(10);
                request.payload.encryptedPassword = await bcrypt.hash(request.payload.password, salt);
                // request.payload.password = undefined;
              }
              console.log('Processed new user:', request.payload);
              return request;
            },
          },
          edit: {
            before: async (request) => {
              console.log('Editing user:', request.payload);
              if (request.payload.password) {
                const salt = await bcrypt.genSalt(10);
                request.payload.encryptedPassword = await bcrypt.hash(request.payload.password, salt);
                request.payload.password = undefined;
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

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        return { email: process.env.ADMIN_EMAIL };
      }
      return null;
    },
    cookiePassword:process.env.COOKIE_SECRET,
});

export { adminJs, router };
