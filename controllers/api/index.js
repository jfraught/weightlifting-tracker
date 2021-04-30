const router = require('express').Router();

const workoutRoutes = require('./workout-routes');

router.use('/workouts', workoutRoutes);

module.exports = router;