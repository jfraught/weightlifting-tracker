const router = require('express').Router();

const workoutRoutes = require('./workout-routes');
const userRoutes = require('./user-routes.js');

router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;