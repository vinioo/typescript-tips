/**
 * - ===================================================== -
 * ~ Types vs interfaces, merging, union and type aliases
 * - ===================================================== -
 */ 


/**  
 * ~ Iterface merging, useful to add functionality to existing libraries. 
 * : Is highly reccomended to use interface to build libraries.
 */ 

interface Chatbot {
    name: string;
}

/* interface Chatbot {
    cluster: string;
} */

const application: Chatbot = {
    name: 'bot',
    cluster: 'take'
}












// ~It is also possible to use interfaces and extend an interface to a new one, like:

interface Router extends Chatbot {
    service: string;
}

const router: Router = {
    name: 'myRouter',
    service: 'routerService'
    cluster: 'take',
}
















// ~ If we use type, the merge declaration like the example above don't works.

type ChatbotType = {
    name: string;
}

type ChatbotType {
    cluster: string;
}

const application2: ChatbotType = {
    name: 'bot',
    cluster: 'take'
}















// ~ To "extend" a type, we should use intersection types, this way:

type ChatbotType = {
    name: string;
}

type RouterType = {
    cluster: string;
}

const newApplication: ChatbotType & RouterType = {
    name: 'teste',
    cluster: 'take'
}










/** 
 * ~ Union Types
 */ 

let applicationState: "open" | "closed" | "minimized";

applicationState = 'fechada';

applicationState = 'closed';

// : Another example

function printId(id: number | string) {
    console.log("Your id is: " + id);
}
// : OK
printId(10);

// : OK
printId("202");

// : Error 
printId({ id: 20});


/** 
 * - When using union with various types, it is overwhelming important to do a type validation.
 * : Otherwhise, the code will throw an exception.
 */ 

function formatId(id: number | string) {
    if (typeof id === "string") {
        id.toUpperCase();
    }

    if (typeof id === "number") {
        id.toString().toUpperCase();
    }
}



/** 
 * - Union works like OR and intersection works like AND.
 */ 



// ~ Types can also be aliases to primitive types, like:.

type StringType = string; // : String type is an alias to a string type.


/**
 * : Other differences: we can use mapped types only with Types (in and keyof keywords). 
 * : We'll se more about mapped types soon.
*/