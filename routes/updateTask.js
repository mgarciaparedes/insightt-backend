const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
const router = Router();

const { updateTask } = require("../controllers/updateTask");

router.post("/updateTask", validateJWT, updateTask);

module.exports = router;
