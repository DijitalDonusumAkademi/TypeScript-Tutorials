// const ADMIN = 0;
// const READ_ONLY =1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var perso = {
    name: 'Zeki SERT',
    age: 36,
    hobbies: ['Sports', 'Cooking'],
    // role: ADMIN
    role: Role.ADMIN
};
// if(perso.role === ADMIN) {
//     console.log('is admin');
// }
if (perso.role === Role.AUTHOR) {
    console.log('is author');
}
//tsc app.ts
