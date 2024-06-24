const { Router } = require("express");
const {validateJWT} = require('../middlewares/validate-jwt');
const router = Router();

const {
  postSaveNewTask
} = require("../controllers/saveNewTask");

router.post(
  "/saveNewTask",
  validateJWT,
  postSaveNewTask
);

module.exports = router;