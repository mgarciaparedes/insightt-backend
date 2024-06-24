const { Router } = require("express");
const {validateJWT} = require('../middlewares/validate-jwt');
const router = Router();

const {
  deleteTask,
} = require("../controllers/deleteTask");

router.post(
  "/deleteTask",
  validateJWT,
  deleteTask
);

module.exports = router;