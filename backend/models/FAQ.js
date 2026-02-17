const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FAQ = sequelize.define('FAQ', {
    question: { type: DataTypes.TEXT, allowNull: false },
    answer: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = FAQ;
