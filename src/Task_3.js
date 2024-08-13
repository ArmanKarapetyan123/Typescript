"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Guest"] = 2] = "Guest";
    //
})(Roles || (Roles = {}));
function chooseRole(role) {
    switch (role) {
        case Roles.Admin:
            return "Welcome Admin";
        case Roles.User:
            return "Welcome User";
        case Roles.Guest:
            return "Welcome Guest";
        default:
            const stranger = role;
            return `what is this role ${stranger} ???`;
    }
}
console.log(chooseRole(Roles.Admin));
