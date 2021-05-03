const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weekday extends Model {}

Weekday.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true
        },
        day_of_week: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'weekday',
    }
);

module.exports = Weekday;
