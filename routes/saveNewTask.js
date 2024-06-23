const { Router } = require("express");

const router = Router();

const {
  postSaveNewTask
} = require("../controllers/saveNewTask");

router.post(
  "/saveNewTask",
  postSaveNewTask
);

module.exports = router;