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