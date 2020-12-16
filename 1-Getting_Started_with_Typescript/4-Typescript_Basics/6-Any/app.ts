
// const ADMIN = 0;
// const READ_ONLY =1;
// const AUTHOR = 2;

enum Rol {ADMIN,READ_ONLY,AUTHOR};


const personel = {
    name: 'Zeki SERT',
    age: 36,
    hobbies: ['Sports','Cooking'],
    // role: ADMIN
    role: Rol.ADMIN
};


let favoriteActivies: any[];
favoriteActivies = 5;

// if(perso.role === ADMIN) {
//     console.log('is admin');
// }

if(perso.role === Rol.AUTHOR) {
    console.log('is author');
}






//tsc app.ts