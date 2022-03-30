const { createPromptModule } = require("inquirer");
const Timesheet = require("./Timesheet");


User.hasMany(Timesheet, {
    foreignKey: "",
  });
  
  Post.belongsTo(Timesheet, {
    foreignKey: "",
  });
  
  User.belongsToMany(Post, {
    through: Vote,
    as: "",
    foreignKey: "",
  });

  createPromptModule.exports = { Timesheet };