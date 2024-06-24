const { Router } = require("express");
const router = Router();

const { postSaveNewUser } = require("../controllers/saveNewUser");

/*Para que el cliente pueda loguear*/
router.post("/saveNewUser", postSaveNewUser);

module.exports = router;
