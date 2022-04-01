const router = require("express").Router();
const { Timesheet } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  console.log(" NEW INBOUND TIMESHEET: ", req.body);

  try {
    const newTimesheet = await Timesheet.create({
      id: req.body.user_id,
      week_start: req.body.week_start,
      timesheet: JSON.stringify(req.body.timesheet),
    });
    res.status(200).json("You successfully submitted a timesheet!");
    console.log(newTimesheet.toJSON());
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
