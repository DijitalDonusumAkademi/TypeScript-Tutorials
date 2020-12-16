function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult(num: number): void{
  console.log('Result:' + num)
}

// printResult(add(5,12));

console.log(printResult(add(5,12)));



/**Exercise-1 */
// let combineValues;

// combineValues = add;

// console.log(combineValues(8,8));


/**Exercise-2 */
// let combineValues: Function;

// combineValues = add;

// console.log(combineValues(8,8));


/**Exercise-3 */
let combineValues: (a: number,b:number) => number;

combineValues = add;

combineValues = printResult;

//tsc app.ts
