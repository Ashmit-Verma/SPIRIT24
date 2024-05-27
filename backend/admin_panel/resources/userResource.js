import verifyRoles from "../utils.js";
import User from "../../models/User.js";
import roles from "../roles.js";

const userResourceProperties = {
  id: {
    isVisible: { list: true, edit: false, filter: true, show: true },
  },
  name: {
    isVisible: { list: true, edit: true, filter: true, show: true },
  },
  email: {
    isVisible: { list: true, edit: true, filter: true, show: true },
  },
  mobile: {
    isVisible: { list: true, edit: true, filter: true, show: true },
  },
  college: {
    isVisible: { list: true, edit: true, filter: true, show: true },
  },
  password: {
    isVisible: { list: false, edit: true, filter: false, show: false },
  },
  points: {
    isVisible: { list: true, edit: true, filter: true, show: true },
  },
};

const allowedRoles = [roles.SUPER_ADMIN];

export default {
  resource: User,
  options: {
    properties: userResourceProperties,
    actions: {
      list: {
        isAccessible: ({ currentAdmin }) =>
          verifyRoles(currentAdmin, allowedRoles),
      },
      new: {
        isAccessible: ({ currentAdmin }) =>
          verifyRoles(currentAdmin, allowedRoles),
      },
      filter: {
        isAccessible: ({ currentAdmin }) =>
          verifyRoles(currentAdmin, allowedRoles),
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          verifyRoles(currentAdmin, allowedRoles),
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          verifyRoles(currentAdmin, allowedRoles),
      },
    },
  },
};
