const router = require('express').Router();

const withAuth = require('../utils/auth');
const { Workout } = require('../models');

router.get('/login', function (req, res) {
    res.render('login');
}
);

router.get('/', function (req, res) {

    Workout.findAll({
        where: { user_id: req.session.user_id }
    })
        .then(data => {
            res.render('weekview');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

}
);



router.get('/daily', withAuth, function (req, res) {

    Workout.findAll({
        where: { user_id: req.session.user_id }
    })
        .then(data => {
            const workouts = data.map(workout => workout.get({ plain: true }));
            res.render('daily', { workouts });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

}
);

router.get('/signup', function (req, res) {
    res.render('signup');
}
);


// get data and render in daily.handlbars
//get from api/workouts
//TODO make for each day of the week

router.get('/workouts', (req, res) => {
    Workout.findAll({
        //get raw value of db
        raw: true
    })
        .then(workout => {
            console.log(workout);
            res.render('daily', {
                workout
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;