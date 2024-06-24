const { Router } = require("express");
const {validateJWT} = require('../middlewares/validate-jwt');
const router = Router();

const {
  getTaskList,
} = require("../controllers/getTaskList");

router.get(
  "/getTaskList",
  validateJWT,
  getTaskList
);

module.exports = router;