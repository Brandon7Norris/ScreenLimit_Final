
var loggedInUser = {}

const getLoggedInUser = () => {
    return loggedInUser
}

exports.getLoggedInUser = getLoggedInUser


const setLoggedInUser = (newUser) => {
    loggedInUser = newUser
}

exports.setLoggedInUser = setLoggedInUser

const clearLoggedInUser = () => {
    loggedInUser = {}
}

exports.clearLoggedInUser = clearLoggedInUser