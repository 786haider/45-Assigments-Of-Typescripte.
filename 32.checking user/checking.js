// List of current usernames
var current_users = ["john", "jane", "alex", "emma", "sam"];
// List of new usernames to check
var new_users = ["John", "sarah", "mike", "emma", "chris"];
// Function to check if a username is already taken
function isUsernameTaken(username) {
    return current_users.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Loop through new_users list to check each new username
new_users.forEach(function (username) {
    if (isUsernameTaken(username)) {
        console.log("The username \"".concat(username, "\" is already taken. Please choose a different one."));
    }
    else {
        console.log("The username \"".concat(username, "\" is available."));
    }
});
