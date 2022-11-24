const { masterBarang, penjualan } = require("../models");

class masterBarangController {
  static async addBarang(req, res, next) {
    try {
      let newData = {
        kodeBarang: req.body.kodeBarang,
        namaBarang: req.body.namaBarang,
        hargaJual: +req.body.hargaJual,
        hargaBeli: +req.body.hargaBeli,
        satuan: req.body.satuan,
        kategori: req.body.kategori,
        stokBarang: +req.body.stokBarang,
      };
      const barang = await masterBarang.create(newData);
      req.status(201).json({
        data: barang,
      });
    } catch (error) {
      next(error);
    }
  }
  static async allBarang(req, res, next) {
    try {
      const dataBarang = await masterBarang.findAll();
      res.status(200).json({
        data: dataBarang,
      });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let newData = {
        kodeBarang: req.body.kodeBarang,
        namaBarang: req.body.namaBarang,
        hargaJual: +req.body.hargaJual,
        hargaBeli: +req.body.hargaBeli,
        satuan: req.body.satuan,
        kategori: req.body.kategori,
        stokBarang: +req.body.stokBarang,
      };
      const barang = await masterBarang.findByPk(id);
      if (!barang) {
        next({
          name: "notFound",
          message: "barang tidak ada",
        });
      } else {
        const editBarang = await masterBarang.update(newData, {
          where: { id: id },
          returting: true,
        });
        res.status(200).json({
          data: editBarang,
          message: `barang dengan id ${id} telah di edit`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const barang = await masterBarang.findByPk(id);
      if (!barang) {
        next({
          name: "notFound",
          message: "barang tidak ada",
        });
      } else {
        const deletedBarang = await masterBarang.destroy({
          where: {
            id: id,
          },
        });
        res.status(200).json({
          message: `barang dengan id ${id} telah di deleted`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = masterBarangController;
