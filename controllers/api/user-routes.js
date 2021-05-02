const router = require('express').Router();

const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {

    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(UserData => res.json(UserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
        .then(UserData => {
            if (!UserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// POST /api/users
router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(UserData => res.json(UserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {

    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(UserData => {
            if (!UserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        res.render('dashboard', { user: dbUserData, message: 'You are now logged in!' });
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(UserData => {
            if (!UserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;