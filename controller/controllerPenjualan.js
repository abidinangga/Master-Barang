const { masterBarang, penjualan } = require("../models");

class PenjualanController {
  static async beliBarang(req, res, next) {
    try {
      const { id } = req.params;
      const data = await masterBarang.findByPk(id);
      const stokBarang = data.stokBarang;
      const kodeBarang = data.kodeBarang;
      const hargaSatuan = data.hargaJual;
      const hargaTotal = req.body.jumlah * hargaSatuan;
      let beliBarang = {
        tanggalFaktur: req.body.tanggalFaktur,
        noFaktur: req.body.noFaktur,
        namaKonsumen: req.body.namaKonsumen,
        kodeBarang: kodeBarang,
        jumlah: req.body.jumlah,
        hargaSatuan: hargaSatuan,
        hargaTotal: hargaTotal,
        masterBarangId: data.id,
      };
      if (!stokBarang || stokBarang < 0) {
        next({
          name: "stokHabis",
          message: "barang yang anda pilih sedang habis",
        });
      } else {
        const beli = await penjualan.create(beliBarang);
        res.status(201).json({
          data: beli,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async getData(req, res, next) {
    try {
      const dataPenjualan = await penjualan.findAll();
      res.status(200).json({
        data: dataPenjualan,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PenjualanController;
