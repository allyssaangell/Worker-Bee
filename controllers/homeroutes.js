const router = require("express").Router();
const { Project, User, Timesheet } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("someone visited root route!");
  // Pass serialized data and session flag into template
  res.render("homepage");
});
// router.get("/project/:id", async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render("project", {
//       ...project,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Timesheet }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("signup");
});

router.get("/viewtime", withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  res.render("viewtime", {
    logged_in: true
  });
});

router.get("/viewdates", withAuth, async (req, res) => {

  try {
  const timesheetsData = await Timesheet.findAll({ 
    where: { user_id: req.session.user_id },
    raw: true
  });

  res.render("viewdates", {
    logged_in: true,
    timesheetsData
  })

  }
  catch(error) {
    console.log(error)
    res.status(500).json(error);
  }
})

// router.get("/view/timesheet/:id", async (req, res) => {

//   try {
//   const timesheetData = await Timesheet.findOne({ 
//     where: { id: req.params.id },
//     raw: true
//   });

//   // parse as json == const timesheet JSON.parse(timesheetData.timesheet)
//   res.render("viewtime", {
//     timesheetData
//     // supply each key in here
//   })
//   }
//   catch(error) {
//     console.log(error)
//     res.status(500).json(error);
//   }
// })

router.get('/viewtime/:id', withAuth, (req, res) => {
  Timesheet.findOne({
      where: {
          id: req.params.id
      }  
  })
  .then(timesheetsData => {
      if (!timesheetsData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }

      // serialize the data
      const timesheet = timesheetsData.get({ plain: true });
      const timesheet1 = JSON.parse(timesheet.timesheet);
      // pass data to template
      res.render("viewtime", {
        logged_in: true,
        timesheet1,
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;
