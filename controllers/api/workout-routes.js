const router = require('express').Router();
const { Workout } = require('../../models');


router.get('/', (req, res) => {
    Workout.findAll({})
        .then(Data => res.json(Data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});





router.post('/', (req, res) => {

    Workout.create({
        workout_name: req.body.workout,
        weight: req.body.weight,
        repetitions: req.body.reps,
        sets: req.body.sets,
        user_id: req.session.user_id
    })
        .then(Data => res.json(Data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Workout.update(
        {
            workout_name: req.body.workout,
            weight: req.body.weight,
            repetitions: req.body.reps,
            sets: req.body.sets,
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(Data => {
            if (!Data) {
                res.status(404).json({ message: 'No workout found with this id' });
                return;
            }
            res.json(Data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Workout.destroy({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(Data => {
            if (!Data) {
                res.status(404).json({ message: 'No workout found with this id' });
                return;
            }
            res.json(Data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;