const router = require('express').Router();

const withAuth = require('../utils/auth')

router.get('/login', function (req, res) {
    res.render('login')
}
)

router.get('/dashboard', withAuth, function (req, res) {
    res.render('dashboard')
}
)

router.get('/signup', function (req, res) {
    res.render('signup')
}
)


module.exports = router