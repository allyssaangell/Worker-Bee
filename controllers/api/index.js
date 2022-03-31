const router = require('express').Router();

const timesheetRoutes = require('./timesheet-routes.js');

router.use('/timesheet', timesheetRoutes);

module.exports = router;