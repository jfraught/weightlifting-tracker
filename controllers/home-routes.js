const router = require('express').Router();

const withAuth = require('../utils/auth');
const { Workout } = require('../models');

router.get('/login', function (req, res) {
    res.render('login');
}
);

router.get('/', function (req, res) {

    const { user_id } = req.session || {}

    if( !user_id ){
        res.redirect('/login');
        return
    }

    Workout.findAll({
        where: { user_id }
    }).then(user => {
        if( !user ){
            // this is bad! what do we do?
            return res.status(500).json({ error:`Couldn't find user by id ${user_id} from session`})
        }
        // if we don't have a user, send them to create / login?
        res.render('weekview');
    })
});


router.get('/internal/fail', function (req, res) {
    console.log('testing failed route')
    throw new Error('Planned failure')
});


router.get('/internal/health', function (req, res) {
    res.status(200).json({ message: "ok" });
});


router.get('/daily', withAuth, function (req, res) {

    Workout.findAll({
        where: { user_id: req.session.user_id }
    })
        .then(data => {
            const workouts = data.map(workout => workout.get({ plain: true }));
            res.render('daily', { workouts });
        })

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