const Controller = require("../controller/controllerPenjualan");
const express = require("express");
const router = express.Router();

router.get("/", Controller.getData);
router.post("/beli/:id", Controller.beliBarang);

module.exports = router;
