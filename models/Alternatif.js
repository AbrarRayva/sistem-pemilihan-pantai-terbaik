const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alternatif = sequelize.define('Alternatif', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Alternatif;