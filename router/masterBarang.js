const Controller = require("../controller/controllerMasterBarang");

const express = require("express");
const router = express.Router();

router.get("/data", Controller.allBarang);
router.post("/add", Controller.addBarang);
router.put("/:id", Controller.edit);
router.delete("/:id", Controller.delete);

module.exports = router;
