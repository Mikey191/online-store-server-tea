const Router = require("express");
const router = new Router();
const infoController = require("../controllers/infoController");

router.post("/", infoController.create);
router.get("/", infoController.getOne);

module.exports = router;
