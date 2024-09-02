const Router = require("express");
const router = new Router();
const infotitleController = require("../controllers/infotitleController");

router.post("/", infotitleController.create);
router.get("/", infotitleController.getOne);

module.exports = router;
