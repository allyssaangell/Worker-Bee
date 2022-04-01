const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Timesheet extends Model {}

Timesheet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    week_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timesheet: {
      type: DataTypes.BLOB("medium"),
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // foreign key reference
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Timesheet",
  }
);

module.exports = Timesheet;
