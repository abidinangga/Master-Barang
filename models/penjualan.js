"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class penjualan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      penjualan.belongsTo(models.masterBarang, {
        foreignKey: "masterBarangId",
        as: "masterBarang",
      });
    }
  }
  penjualan.init(
    {
      tanggalFaktur: DataTypes.DATE,
      noFaktur: DataTypes.INTEGER,
      namaKonsumen: DataTypes.STRING,
      kodeBarang: DataTypes.STRING,
      jumlah: DataTypes.INTEGER,
      hargaSatuan: DataTypes.INTEGER,
      hargaTotal: DataTypes.INTEGER,
      masterBarangId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "penjualan",
    }
  );
  return penjualan;
};
