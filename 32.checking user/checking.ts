// List of current usernames
let current_users: string[] = ["john", "jane", "alex", "emma", "sam"];

// List of new usernames to check
let new_users: string[] = ["John", "sarah", "mike", "emma", "chris"];

// Function to check if a username is already taken
function isUsernameTaken(username: string): boolean {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Loop through new_users list to check each new username
new_users.forEach(username => {
    if (isUsernameTaken(username)) {
        console.log(`The username "${username}" is already taken. Please choose a different one.`);
    } else {
        console.log(`The username "${username}" is available.`);
    }
});
