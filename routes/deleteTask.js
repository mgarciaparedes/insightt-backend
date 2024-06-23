const { Router } = require("express");

const router = Router();

const {
  deleteTask,
} = require("../controllers/deleteTask");

router.post(
  "/deleteTask",
  deleteTask
);

module.exports = router;