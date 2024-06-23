const { Router } = require("express");

const router = Router();

const {
  getTaskList,
} = require("../controllers/getTaskList");

router.get(
  "/getTaskList",
  getTaskList
);

module.exports = router;