import verifyRoles from "../utils.js";
import { adminResourceProperties } from "../../shared/constants.js";
import roles from "../roles.js";
import Admin from "../../models/Admin.js";

const allowedRoles = [roles.SUPER_ADMIN];

export default {
  resource: Admin,
  options: {
    listProperties: adminResourceProperties,
    filterProperties: adminResourceProperties,
    editProperties: adminResourceProperties,
    showProperties: adminResourceProperties,
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
