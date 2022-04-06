const router = require("express").Router();
const { Timesheet, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Timesheet.findAll({
    // Query configuration
    attributes: ["id", "week_start", "timesheet", "date_created"],
    order: [["id", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["id", "email"],
      },
    ],
  })
    .then((dbTimesheetData) => res.json(dbTimesheetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Timesheet.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "week_start", "timesheet", "date_created"],
    include: [
      {
        model: User,
        attributes: ["id", "email"],
      },
    ],
  })
    .then((dbTimesheetData) => {
      if (!dbTimesheetData) {
        res.status(404).json({ message: "No timesheet found with this id" });
        return;
      }
      res.json(dbTimesheetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  //router.post("/", withAuth, async (req, res) => {
  console.log(" NEW INBOUND TIMESHEET: ");
  // console.log(" NEW INBOUND TIMESHEET: ", req.body);
  Timesheet.create({
    week_start: req.body.week_start,
    timesheet: JSON.stringify(req.body.timesheet),
    user_id: req.session.user_id
  })
    .then((dbTimesheetData) => res.json(dbTimesheetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    // COMMENTED OUT TO CREATE THE POST SUCCESSFULLY
  // try {
  //   const newTimesheet = await Timesheet.create({
  //     id: req.body.user_id,
  //     week_start: req.body.week_start,
  //     timesheet: JSON.stringify(req.body.timesheet),
  //   });
  //   res.status(200).json("You successfully submitted a timesheet!");
  //   console.log(newTimesheet.toJSON());
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

router.delete("/:id", (req, res) => {
  Timesheet.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTimesheetData) => {
      if (!dbTimesheetData) {
        res.status(404).json({ message: "No timesheet found with this id" });
        return;
      }
      res.json(dbTimesheetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
