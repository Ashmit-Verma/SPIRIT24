import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const OtpData = sequelize.define(
  "OtpData",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    otpSecret: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pendingUserData: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  }
);

export default OtpData;
