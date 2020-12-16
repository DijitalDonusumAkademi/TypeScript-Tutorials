
// const ADMIN = 0;
// const READ_ONLY =1;
// const AUTHOR = 2;

enum Role {ADMIN,READ_ONLY,AUTHOR};


const perso = {
    name: 'Zeki SERT',
    age: 36,
    hobbies: ['Sports','Cooking'],
    // role: ADMIN
    role: Role.ADMIN
};


// if(perso.role === ADMIN) {
//     console.log('is admin');
// }

if(perso.role === Role.AUTHOR) {
    console.log('is author');
}






//tsc app.ts