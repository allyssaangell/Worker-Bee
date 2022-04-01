const router = require('express').Router();

const timesheetRoutes = require('./timesheet-routes.js');
const userRoutes = require('./userRoutes')

router.use('/timesheet', timesheetRoutes);
router.use('./userRoutes', userRoutes)

module.exports = router;