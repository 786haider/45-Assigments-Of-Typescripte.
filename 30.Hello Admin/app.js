var user = ["Haider", "Ali", "Anus", "Umer", "Admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user_1 = users_1[_i];
    if (user_1 === "Admin") {
        console.log("Hello Admin,would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(users, ",Thank You for loging again. "));
    }
}
