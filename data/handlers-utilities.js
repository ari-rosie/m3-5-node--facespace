//function returns a user
const getUserById = (id, database) => {
    return database.find(data => data._id === id);
}

const getUserByName = (name, database) => {
    return database.find(data => data.name.toLowerCase() === name);
}

//function that returns an array of users
const getFriends = (friendsArr, database) => {
    const friends = [];
    for (let friend in friendsArr) {
        friends.push(getUserById(friendsArr[friend], database));
    }
    return friends;
    
}
module.exports = { getUserById, getFriends, getUserByName }; 