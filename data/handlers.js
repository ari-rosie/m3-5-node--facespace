const { users } = require('./users');
const func = require('./handlers-utilities');

// declare the 404 function
const handleFourOhFour = (req, res) => {
    res.status(404).send("I couldn't find what you're looking for.");
};

//homepage function
const homepage = (req, res) => {
    res.status(200).render('pages/homepage', {users: users});
};

//profile page function
const profilePage = (req, res) => {
    const user = func.getUserById(req.params.id, users);
    const friends = func.getFriends(user.friends, users);
    console.log(friends);
    res.status(200).render('pages/profile', {user: user, friends: friends});
}

//sign in page function
const signIn = (req, res) => {
    res.status(200).render('pages/signin');
}

//submit name function
const submitName = (req, res) => {
    const firstName = req.body.firstName.toLowerCase();
    const user = func.getUserByName(firstName, users);
    if (user)
        res.status(200).redirect(`/users/${user._id}`);
    else
        res.status(404).redirect('/*');
}

module.exports = { handleFourOhFour, homepage, profilePage, signIn, submitName };

