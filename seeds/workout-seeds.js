const { Workout } = require('../models');
const workoutData = [{
    workout_name: 'bench press',
    weight: '120',
    repetitions: '3',
    sets: '10'
},
{
    workout_name: 'squat',
    weight: '130',
    repetitions: '4',
    sets: '15'
}, {
    workout_name: 'deadlift',
    weight: '80',
    repetitions: '5',
    sets: '10'
},
];
const seedWorkouts = () => Workout.bulkCreate(workoutData);
module.exports = seedWorkouts;