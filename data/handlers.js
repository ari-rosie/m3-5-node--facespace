const { users } = require('./users');
const func = require('./handlers-utilities');
const { getUserById } = require('./handlers-utilities');
let signFlag = false;
let loggedUserId = 0;

// declare the 404 function
const handleFourOhFour = (req, res) => {
    res.status(404).send("I couldn't find what you're looking for.");
};

//homepage function
const homepage = (req, res) => {
    res.status(200).render('pages/homepage', {loggedUser: getUserById(loggedUserId, users), users: users, logged: signFlag});
};

//profile page function
const profilePage = (req, res) => {
    const user = func.getUserById(req.params.id, users);
    const friends = func.getFriends(user.friends, users);
    res.status(200).render('pages/profile', {loggedUser: getUserById(loggedUserId, users), user: user, friends: friends, logged: signFlag});
};

//sign in page function
const signIn = (req, res) => {
    if (!signFlag)
        res.status(200).render('pages/signin', {loggedUser: getUserById(loggedUserId, users), logged: signFlag});
    else 
        res.status(200).redirect(`/users/${loggedUserId}`);
};

//submit name function
const submitName = (req, res) => {
    const firstName = req.body.firstName.toLowerCase();
    const user = func.getUserByName(firstName, users);
    if (user){
        loggedUserId = user._id;
        signFlag = true;
        res.status(200).redirect(`/users/${user._id}`);
    }
    else
        res.status(404).redirect('/*');
};

module.exports = { handleFourOhFour, homepage, profilePage, signIn, submitName };

