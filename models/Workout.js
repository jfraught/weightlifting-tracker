const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Workout extends Model { }

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workout_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        repetitions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
    }
);

module.exports = Workout;