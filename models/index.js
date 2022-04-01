const Timesheet = require("./Timesheet");
const User = require("./User");

User.hasMany(Timesheet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Timesheet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Timesheet };
