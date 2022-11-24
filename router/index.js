const express = require("express");
const router = express.Router();
const masterBarang = require("./masterBarang");
const penjualan = require("./penjualan");

router.use("/", masterBarang);
router.use("/penjualan", penjualan);

module.exports = router;