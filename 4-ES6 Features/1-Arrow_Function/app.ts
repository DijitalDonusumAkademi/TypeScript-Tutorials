// const add = (a: number, b:number) => {
//     return a + b;
// };

const add = (a: number, b:number) => a + b;

const printOutPut: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click',() => {});
// }

if(button){
    button.addEventListener('click', event => console.log(event));
}




console.log(add(2,5));