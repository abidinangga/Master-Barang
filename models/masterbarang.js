'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class masterBarang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      masterBarang.hasMany(models.penjualan,{
        foreignKey:'id',
        as:"penjualan"
      })
    }
  }
  masterBarang.init({
    kodeBarang: DataTypes.STRING,
    namaBarang: DataTypes.STRING,
    hargaJual: DataTypes.INTEGER,
    hargaBeli: DataTypes.INTEGER,
    satuan: DataTypes.STRING,
    kategori: DataTypes.STRING,
    stokBarang: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'masterBarang',
  });
  return masterBarang;
};