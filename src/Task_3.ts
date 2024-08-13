enum Roles {
    Admin,
    User,
    Guest,
    //
}

function chooseRole(role : Roles) {
    switch(role){
        case Roles.Admin:
            return "Welcome Admin";
        case Roles.User:
            return "Welcome User";
        case Roles.Guest:
            return "Welcome Guest";
        default:
            const stranger : never = role as never;
            return `what is this role ${stranger} ???`
    }
}

console.log(chooseRole(Roles.Admin));