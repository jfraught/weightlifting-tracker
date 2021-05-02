const { User } = require('../models');
const userData = [{
    email: 'newemail@new.com',
    password: 'mouse'
},
{
    email: 'emailme@me.com',
    password: 'bone'
},
{
    email: 'whynot@aol.com',
    password: 'oats'
}
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;