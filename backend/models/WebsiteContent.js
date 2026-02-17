const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const WebsiteContent = sequelize.define('WebsiteContent', {
    hero_title: { type: DataTypes.STRING, allowNull: false },
    hero_subtitle: { type: DataTypes.STRING, allowNull: false },
    hero_button: { type: DataTypes.STRING, allowNull: false },
    overview_title: { type: DataTypes.STRING, allowNull: false },
    overview_description: { type: DataTypes.TEXT, allowNull: false },
    connectivity_title: { type: DataTypes.STRING, allowNull: false },
    connectivity_description: { type: DataTypes.TEXT, allowNull: false },
    about_title: { type: DataTypes.STRING, allowNull: false },
    about_description: { type: DataTypes.TEXT, allowNull: false },
    construction_label: { type: DataTypes.STRING, allowNull: false },
});

module.exports = WebsiteContent;
