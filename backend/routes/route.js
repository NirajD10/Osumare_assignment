const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const listsController = require("../controller/lists-controller");

router.get("/tasks", listsController.getAllTasks);

router.get("/tasks/:id", listsController.getSingleTasks);

router.post(
  "/tasks",
  [
    body("title").notEmpty().escape().withMessage("Please enter an title"),
    body("description")
      .isLength({ min: 5 })
      .trim()
      .withMessage("The description should be minimum 5 character or more."),
  ],
  listsController.postTasks
);

router.delete("/tasks/:id", listsController.deleteSingleTasks);

router.put(
  "/tasks/:id",
  [
    body("title", "Please enter title.")
      .isString()
      .trim()
      .withMessage("Cannot empty title."),
    body("description")
      .isLength({ min: 5 })
      .trim()
      .withMessage("The description should be minimum 5 character or more."),
  ],
  listsController.updateTasks
);

module.exports = router;
