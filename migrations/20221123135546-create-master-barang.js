"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("masterBarangs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kodeBarang: {
        type: Sequelize.STRING,
      },
      namaBarang: {
        type: Sequelize.STRING,
      },
      hargaJual: {
        type: Sequelize.INTEGER,
      },
      hargaBeli: {
        type: Sequelize.INTEGER,
      },
      satuan: {
        type: Sequelize.STRING,
      },
      kategori: {
        type: Sequelize.STRING,
      },
      stokBarang: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("masterBarangs");
  },
};
