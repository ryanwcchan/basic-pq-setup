const { Router } = require("express");
const router = Router();
const usernameController = require("../controllers/usernameController");

router.get("/", usernameController.getUsernames);
router.get("/add", usernameController.createUsernameGet);
router.post("/add", usernameController.createUsernamePost);
router.get("/search", usernameController.search);

module.exports = router;