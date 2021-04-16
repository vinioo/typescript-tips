/**
 * - ====================================== -
 * ~ Never and unknown types
 * - ====================================== -
 */ 

let exampleAny: any; // : If a type is not defined or a value is not assigned, the variable will always have the type any.
let exampleUnknown: unknown;


exampleAny = 'string';
exampleAny = 20;

exampleUnknown = 'string';
exampleUnknown = 20;













// : If unknown can act like any, what is the difference?

exampleAny.anything.here.go.run();

exampleUnknown.anything.here.go.run(); // : you cannot access any properties on an unknown variable without checks

exampleUnknown.trim();

let unknownBool: boolean = exampleUnknown;

if (typeof exampleUnknown === 'string') {
    exampleUnknown.trim();
}

if (typeof exampleUnknown === 'boolean') {
    let unknownBool: boolean = exampleUnknown;
}










/**
 * ~ Unknown type forces us to check the type before using the variable.
 * : Unknow type is a safety version of ANY. 
  */

// - Usecase on legacy projects

let variable;

/**
 * : Different parts of the project can use the variable as many ways.
 * : In the first example, it is used as a string
 * : and in the second, as a number.
  */
variable.toUpperCase();

variable.toFixed(2);

/**
 * : If we assign a new variable to unknown type, we need to explicity validate the type before calling a function.
*/

let newVariable: unknown;

newVariable.toUpperCase();

newVariable.toFixed(2);

/**
 * : To fix this, we need to check the types.
*/

let newUnknownVariable: unknown;

if (typeof newVariable === 'string') {
    newVariable.toUpperCase();
}

if (typeof newVariable === 'number') {
    newVariable.toFixed(2);
}

/**
 * 
 * - You should always void usage of ANY. 
 * - If for some reason it is not possible, for more type safety, try to use unknown type instead.
 * 
*/


/** 
 * ~ Type never.
 * : Basically, never type refers to a function that dont returns.
 * : like infinite loops and throw blocks.
 */

const looper = () => {
    while(true) {
        console.log('i will never stop');
    }
}

const throwException = () => {
    throw new Error();
}