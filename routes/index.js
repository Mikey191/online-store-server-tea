const Router = require("express");
const router = new Router();

const basketRoutes = require("./basketRoutes");
const categoryRoutes = require("./categoryRoutes");
const infoRoutes = require("./infoRoutes");
const infotitleRoutes = require("./infotitleRoutes");
const productRoutes = require("./productRoutes");
const typeRoutes = require("./typeRoutes");
const userRoutes = require("./userRoutes");

router.use("/basket", basketRoutes);
router.use("/category", categoryRoutes);
router.use("/info", infoRoutes);
router.use("/infotitle", infotitleRoutes);
router.use("/product", productRoutes);
router.use("/type", typeRoutes);
router.use("/user", userRoutes);

module.exports = router;
