const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Amenity = sequelize.define('Amenity', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Amenity;
