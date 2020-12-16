// const person : {
//     name : string;
//     age : number;
// } = 


const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];
} = {
    name : 'Zeki SERT',
    age : 30,
    hobbies: ['Sports','Cooking'],
    role: [2,'author']
};

// person.role.push('admin');
//person.role[1] = 10;

person.role = [0,'admin'];




//string yerine any yazarsak hata almayız
let favoriteActivities: string[];
// favoriteActivities = 'Sports';
// favoriteActivities = ['Sports',1]

favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    
}
//tsc app.ts