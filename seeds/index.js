const seedUsers = require('./user-seeds');
const seedWorkouts = require('./workout-seeds');
require('dotenv').config();
console.log(process.env)
const sequelize = require('../config/connection');
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedWorkouts();

    process.exit(0);
};
seedAll();