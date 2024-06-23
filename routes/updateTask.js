const { Router } = require("express");

const router = Router();

const {
  updateTask,
} = require("../controllers/updateTask");

router.post(
  "/updateTask",
  updateTask
);

module.exports = router;