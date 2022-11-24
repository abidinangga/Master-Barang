'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('penjualans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggalFaktur: {
        type: Sequelize.DATE
      },
      noFaktur: {
        type: Sequelize.INTEGER
      },
      namaKonsumen: {
        type: Sequelize.STRING
      },
      kodeBarang: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.INTEGER
      },
      hargaSatuan: {
        type: Sequelize.INTEGER
      },
      hargaTotal: {
        type: Sequelize.INTEGER
      },
      masterBarangId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'masterBarangs',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('penjualans');
  }
};