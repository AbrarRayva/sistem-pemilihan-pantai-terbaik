const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Alternatif = require('./Alternatif');

const NilaiAlternatif = sequelize.define('NilaiAlternatif', {
    kode_kriteria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nilai: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'NilaiAlternatifs',
    timestamps: false
});

Alternatif.hasMany(NilaiAlternatif, { foreignKey: 'alternatifId' });
NilaiAlternatif.belongsTo(Alternatif, { foreignKey: 'alternatifId' });

module.exports = NilaiAlternatif;