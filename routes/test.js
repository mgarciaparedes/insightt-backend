const { Router } = require("express");

const router = Router();

const {
  getTest,
} = require("../controllers/test");

router.get(
  "/test",
  getTest
);

module.exports = router;