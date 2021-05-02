const router = require('express').Router();

const withAuth = require('../utils/auth')

router.get('/', function (req, res) {
    res.render('login')
}
)

router.get('/dashboard', withAuth, function (req, res) {
    res.render('dashboard')
}
)


module.exports = router