// const person : {
//     name : string;
//     age : number;
// } = 


const person = {
    name : 'Zeki SERT',
    age : 30,
    hobbies: ['Sports','Cooking']
};

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